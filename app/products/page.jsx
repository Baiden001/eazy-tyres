import Link from 'next/link';
import { PageHead } from '../../components/Ui';
import TyreCarousel from '../../components/TyreCarousel';
import BrandShowcase from '../../components/BrandShowcase';
import ProductCategory from '../../components/ProductCategory';
import { SIZES, PRODUCT_CATEGORIES } from '../../lib/data';
import { pageMeta } from '../../lib/site-config';
export const metadata=pageMeta('Products','Tipper truck, trailer, light truck, saloon car and SUV tyres from Eazy Road Tyres. Premium brands, proven performance.','/products');
export default function Products(){
  return (<><PageHead title="Products" sub="Premium brands. Proven performance."/>
  <section className="blk"><BrandShowcase/>
  <h2>Tyre sizes we supply</h2><div className="sizes">{SIZES.map(s=><span key={s}>{s}</span>)}</div>
  <p>Need a size or brand not listed? Ask us and we will source it.</p><Link className="btn" href="/contact">Request a quote</Link></section>
  <section className="blk alt"><h2>Tyres for every application</h2><p>Contact us for availability and quotations. Sizes shown are indicative of our range.</p>
  <div className="pc-grid">{PRODUCT_CATEGORIES.map(c=><ProductCategory key={c.name} c={c}/>)}</div></section>
  <TyreCarousel/></>);
}
