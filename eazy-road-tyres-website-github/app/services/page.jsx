import Link from 'next/link';
import { PageHead, Cards } from '../../components/Ui';
import { SERVICES } from '../../lib/data';
import { pageMeta } from '../../lib/site-config';
export const metadata=pageMeta('Services','Tyre supply, professional fitment, on-site tyre management, consultation, emergency breakdown support and fleet monitoring.','/services');
export default function Services(){
  return (<><PageHead title="Our Services" sub="Everything your fleet needs."/><section className="blk"><Cards numbered items={SERVICES}/></section>
  <section className="cta"><h2>Need tyres or tyre support for your fleet?</h2><Link className="btn" href="/contact">Send an enquiry</Link></section></>);
}
