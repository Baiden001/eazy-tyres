import Link from 'next/link';
export default function ProductCategory({c}){
  return (<article className="pc"><h3>{c.name}</h3><p>{c.desc}</p>
    <div className="sizes sm">{c.sizes.map(s=><span key={s}>{s}</span>)}</div>
    {c.brands.length>0&&<p><b>Brands:</b> {c.brands.join(', ')}</p>}
    <Link className="lk" href="/contact" aria-label={`Enquire about ${c.name}`}>Enquire about this range &rarr;</Link></article>);
}
