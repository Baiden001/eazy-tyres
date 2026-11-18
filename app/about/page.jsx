import { PageHead, Stats, Cards } from '../../components/Ui';
import { ABOUT_TEXT, ABOUT_STATS, VISION, MISSION, VALUES } from '../../lib/data';
import { pageMeta } from '../../lib/site-config';
export const metadata=pageMeta('About Us','Eazy Road Tyres (Pty) Ltd is a specialist tyre supply and fitment company in Ghana. Our vision, mission and core values.','/about');
export default function About(){
  return (<><PageHead title="About Us" sub="Keeping your fleet rolling, mile after mile."/>
  <section className="blk"><h2>About Eazy Road Tyres</h2>{ABOUT_TEXT.map(t=><p key={t.slice(0,24)}>{t}</p>)}<Stats items={ABOUT_STATS}/></section>
  <section className="blk alt"><h2>Vision &amp; Mission</h2>
    <div className="vm"><article className="v"><h3>Vision</h3><p>{VISION}</p></article><article><h3>Mission</h3><p>{MISSION}</p></article></div></section>
  <section className="blk"><h2>Core Values</h2><Cards numbered items={VALUES}/></section></>);
}
