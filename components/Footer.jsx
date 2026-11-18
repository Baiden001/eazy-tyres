import Link from 'next/link';
import { NAV, CONTACT } from '../lib/data';
export default function Footer(){
  return (<footer><div><img src="/assets/logo.png" alt="Eazy Road Tyres" height="44" loading="lazy"/><p>{CONTACT.name}<br/>{CONTACT.tagline}</p></div>
  <div><b>Contact</b><p>{CONTACT.location}<br/><a href={`tel:${CONTACT.tel}`}>{CONTACT.phone}</a><br/><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><br/>{CONTACT.web}</p></div>
  <div><b>Explore</b><p>{NAV.slice(1).map(([h,n])=><span key={h}><Link href={h}>{n}</Link><br/></span>)}</p></div></footer>);
}
