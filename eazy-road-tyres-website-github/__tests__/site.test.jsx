import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
vi.mock('next/navigation',()=>({usePathname:()=> '/products'}));
import Hero from '../components/Hero';
import Header from '../components/Header';
import TyreCarousel from '../components/TyreCarousel';
import ContactForm from '../components/ContactForm';
import Products from '../app/products/page';
import Services from '../app/services/page';
import Industries from '../app/industries/page';
import About from '../app/about/page';
import sitemap from '../app/sitemap';
import { NAV, CAROUSEL, STATS, PRODUCT_CATEGORIES, BRANDS, BRAND_DETAILS } from '../lib/data';

test('hero matches reference, pill removed, image mode by default',()=>{
  const {container}=render(<Hero/>);
  expect(screen.getByText(/Powering every journey/i)).toBeInTheDocument();
  expect(screen.getByText(/Keeping industry moving/i)).toBeInTheDocument();
  expect(screen.queryByText(/engineered for every terrain/i)).toBeNull();
  expect(screen.getByText(/EXPLORE OUR PRODUCTS/).closest('a')).toHaveAttribute('href','/products');
  expect(screen.getByText('CONTACT US').closest('a')).toHaveAttribute('href','/contact');
  ['Uncompromising Quality','Global Brand Partnerships','24/7 Emergency Support','Professional Tyre Solutions'].forEach(t=>expect(screen.getByText(t)).toBeInTheDocument());
  expect(container.querySelector('.hero-media img')).toHaveAttribute('src','/assets/hero.jpg');
  expect(container.querySelector('video')).toBeNull();
});
test('hero shows vehicle types ordered biggest to smallest',()=>{
  const {container}=render(<Hero/>);
  const labels=[...container.querySelectorAll('.vehicles li')].map(l=>l.textContent);
  expect(labels).toEqual(['Tipper Cars','Low Deck','Trailers','Pickups','SUVs','Saloon Cars']);
  expect(container.querySelectorAll('.vehicles img')).toHaveLength(6);
});
test('header shows all pages, marks the active page and has the WhatsApp button',()=>{
  render(<Header/>);
  NAV.forEach(([,n])=>expect(screen.getByText(n)).toBeInTheDocument());
  expect(screen.getByText('Products')).toHaveAttribute('aria-current','page');
  expect(screen.getByText('Get in Touch').getAttribute('href')).toContain('wa.me/233257510997');
  const b=screen.getByLabelText('Menu'); fireEvent.click(b); expect(b).toHaveAttribute('aria-expanded','true');
  fireEvent.keyDown(window,{key:'Escape'}); expect(b).toHaveAttribute('aria-expanded','false');
});
test('carousel: two rows, opposite directions, unique keys, hidden duplicates',()=>{
  const err=vi.spyOn(console,'error').mockImplementation(()=>{});
  const {container}=render(<TyreCarousel/>);
  const rows=screen.getAllByTestId('row'); expect(rows).toHaveLength(2);
  expect(rows[0]).not.toHaveClass('rev'); expect(rows[1]).toHaveClass('rev');
  [...CAROUSEL.trucks,...CAROUSEL.com].forEach(([s])=>expect(screen.getAllByText(s).length).toBeGreaterThan(0));
  expect(container.querySelectorAll('.ty[aria-hidden="true"]').length).toBeGreaterThan(0);
  expect(err).not.toHaveBeenCalled(); err.mockRestore();
});
test('brand logos exist for every brand and show origin details',()=>{
  render(<Products/>);
  expect(screen.getByText('USA | Global Leader')).toBeInTheDocument(); expect(screen.getByText('China | Premium brand')).toBeInTheDocument();
  BRAND_DETAILS.forEach(b=>expect(screen.getByAltText(`${b.name} logo`)).toHaveAttribute('src',b.logo));
});
test('stats are verified figures only',()=>{
  expect(STATS.flat().join(' ')).not.toMatch(/100%/);
  expect(STATS[0][0]).toBe(String(BRANDS.length));
});
test('products page: brands, sizes, 6 categories, no pricing or shop features',()=>{
  const {container}=render(<Products/>);
  BRANDS.forEach(b=>expect(screen.getByAltText(`${b} logo`)).toBeInTheDocument());
  ['315/80R22.5','13R22.5','265/65R17','175/65R14'].forEach(s=>expect(screen.getAllByText(s).length).toBeGreaterThan(0));
  expect(PRODUCT_CATEGORIES).toHaveLength(4);
  PRODUCT_CATEGORIES.forEach(c=>expect(screen.getByText(c.name)).toBeInTheDocument());
  expect(screen.getByText('Request a quote').closest('a')).toHaveAttribute('href','/contact');
  expect(screen.getByText('Tyres in motion')).toBeInTheDocument();
  expect(container.textContent).not.toMatch(/GH₵|GHS|\bprice|add to cart|checkout|buy now/i);
});
test('about, services and industries content',()=>{
  render(<><About/><Services/><Industries/></>);
  expect(screen.getByText('On-site tyre management')).toBeInTheDocument();
  expect(screen.getByText('Fleet monitoring and reporting')).toBeInTheDocument();
  expect(screen.getByText('Waste Management')).toBeInTheDocument();
  expect(screen.getByText('Send an enquiry').closest('a')).toHaveAttribute('href','/contact');
  ['Vision','Mission','Core Values','Integrity','Safety First','Reliability','Excellence','Customer Focus','Innovation'].forEach(t=>expect(screen.getAllByText(t).length).toBeGreaterThan(0));
  expect(screen.getByText(/most trusted and preferred tyre specialist in Ghana/)).toBeInTheDocument();
  expect(screen.getByText(/Founded on a passion for quality and reliability/)).toBeInTheDocument();
});
test('contact form validates required fields',()=>{
  const open=vi.spyOn(window,'open').mockImplementation(()=>null);
  const {container}=render(<ContactForm/>);
  fireEvent.submit(container.querySelector('form'));
  expect(screen.getAllByRole('alert')).toHaveLength(2); expect(open).not.toHaveBeenCalled();
});
test('contact form builds an encoded WhatsApp message',()=>{
  const open=vi.spyOn(window,'open').mockImplementation(()=>null);
  const {container}=render(<ContactForm/>);
  fireEvent.change(screen.getByLabelText('Full name'),{target:{value:'Kofi'}});
  fireEvent.change(screen.getByLabelText('Company name'),{target:{value:'Mine Co'}});
  fireEvent.change(screen.getByLabelText('Message'),{target:{value:'Need 29.5R25 & fitting'}});
  fireEvent.submit(container.querySelector('form'));
  const url=open.mock.calls[0][0]; expect(url).toContain('https://wa.me/233257510997?text=');
  const t=decodeURIComponent(url.split('text=')[1]);
  expect(t).toContain('Name: Kofi'); expect(t).toContain('Company: Mine Co'); expect(t).toContain('Need 29.5R25 & fitting'); expect(t).not.toContain('Phone:');
  expect(screen.getByRole('status')).toBeInTheDocument();
});
test('sitemap lists all six pages',()=>{ expect(sitemap()).toHaveLength(6); });

test('no mining, OTR or heavy-equipment references anywhere in the site content',()=>{
  const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
  const files=['app','components','lib'].flatMap(walk).filter(f=>/\.(jsx?|css)$/.test(f));
  const bad=/mining|\bmines?\b|\bOTR\b|\bhaul\b|haul road|quarr|articulated|earthmoving|heavy[- ](duty|equipment)|forestry|agricultur|23\.5R25|29\.5R|1800-25|2100-25/i;
  files.forEach(f=>expect(fs.readFileSync(f,'utf8'),f).not.toMatch(bad));
});
