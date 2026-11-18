import { PageHead, Cards } from '../../components/Ui';
import { INDUSTRIES } from '../../lib/data';
import { pageMeta } from '../../lib/site-config';
export const metadata=pageMeta('Industries','Tyre supply and support for construction, infrastructure, waste management, transport and logistics, and passenger vehicles.','/industries');
export default function Industries(){
  return (<><PageHead title="Industries We Serve" sub="We work where you work."/><section className="blk"><Cards numbered items={INDUSTRIES}/></section></>);
}
