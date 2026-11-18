import { BRAND_DETAILS, BRANDS_INTRO } from '../lib/data';
export default function BrandShowcase(){
  return (<><h2>Brands</h2><p>{BRANDS_INTRO}</p>
    <div className="bgrid">{BRAND_DETAILS.map(b=>(<article className="bc" key={b.name}>
      <img src={b.logo} alt={`${b.name} logo`} width="260" height="48" loading="lazy"/>
      <h3>{b.origin}</h3><ul>{b.points.map(p=><li key={p}>{p}</li>)}</ul></article>))}</div></>);
}
