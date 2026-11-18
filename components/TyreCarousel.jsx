import { CAROUSEL } from '../lib/data';
const Tyre=()=>(<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="48" fill="#17171a"/><circle cx="50" cy="50" r="42" fill="none" stroke="#f47b20" strokeWidth="9" strokeDasharray="7 5"/><circle cx="50" cy="50" r="30" fill="#0a0a0b"/><circle cx="50" cy="50" r="22" fill="#3a3a40"/><circle cx="50" cy="50" r="7" fill="#0a0a0b"/></svg>);
// 4 copies: two per half, so each half is wider than any screen and the loop has no gap. Copies 2-4 are hidden from assistive tech.
const Row=({items,rev,id})=>(<div className={`row${rev?' rev':''}`} data-testid="row">{[0,1,2,3].flatMap(k=>items.map(([s,b])=>(<div className="ty" key={`${id}-${k}-${s}-${b}`} aria-hidden={k>0?'true':undefined}><Tyre/><div><b>{s}</b><small>{b}</small></div></div>)))}</div>);
export default function TyreCarousel(){
  return (<section className="strip" aria-label="Tyre sizes we supply"><div className="sh"><h2>Tyres in motion</h2><p>Sizes we supply and fit, rolling past. Hover to pause.</p></div>
    <Row id="trucks" items={CAROUSEL.trucks}/><Row id="com" items={CAROUSEL.com} rev/></section>);
}
