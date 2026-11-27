import Link from 'next/link';
import Hero from '../components/Hero';
import TyreCarousel from '../components/TyreCarousel';
import { Cards, Stats } from '../components/Ui';
import { STATS, SERVICES, HOME_SERVICES, WA } from '../lib/data';
import { pageMeta } from '../lib/site-config';
const HOME_TITLE='Eazy Road Tyres | Truck, SUV and car tyres in Tarkwa, Ghana';
const homeMeta=pageMeta('Eazy Road Tyres','Premium tyre solutions for commercial transportation and passenger vehicles. Tyre supply and fitment in Tarkwa, Ghana.','/');
export const metadata={...homeMeta,title:{absolute:HOME_TITLE},openGraph:{...homeMeta.openGraph,title:HOME_TITLE},twitter:{...homeMeta.twitter,title:HOME_TITLE}};
export default function Home(){
  return (<>
    <Hero/><TyreCarousel/>
    <section className="blk"><h2>Tyre supply and fitment specialists</h2><p>Eazy Road Tyres is a specialist tyre supplier and fitment partner for tipper trucks, commercial fleets, SUVs and saloon cars. Based in Tarkwa, Western Region, Ghana, we keep your fleet moving.</p><Stats items={STATS}/></section>
    <section className="blk alt"><h2>Everything your fleet needs</h2><Cards items={SERVICES.filter(([n])=>HOME_SERVICES.includes(n))}/><p><Link className="btn" href="/services">All services</Link></p></section>
    <section className="cta"><h2>Whatever the terrain, whatever the load, we have you covered.</h2><a className="btn" href={WA} target="_blank" rel="noopener noreferrer">MESSAGE US ON WHATSAPP</a></section></>);
}
