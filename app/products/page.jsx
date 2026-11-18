
import Link from 'next/link';
import { PageHead } from '../../components/Ui';
import TyreCarousel from '../../components/TyreCarousel';
import BrandShowcase from '../../components/BrandShowcase';
import ProductCategory from '../../components/ProductCategory';
import TyreSizeFinder from '../../components/TyreSizeFinder';
import { SIZES, PRODUCT_CATEGORIES } from '../../lib/data';
import { pageMeta } from '../../lib/site-config';

export const metadata = pageMeta(
  'Products',
  'Find truck, trailer, light commercial, saloon car and SUV tyres in Ghana. Explore tyre sizes and leading international tyre brands at Eazy Road Tyres.',
  '/products'
);

export default function Products() {
  return (
    <>
      <PageHead
        title="Products"
        sub="Premium brands. Proven performance."
      />

      <section className="blk">
        <BrandShowcase />

        <h2>Tyre sizes we supply</h2>
        <div className="sizes">
          {SIZES.map((size) => (
            <span key={size}>{size}</span>
          ))}
        </div>

        <p>Need a size or brand not listed? Ask us and we will source it.</p>
        <Link className="btn" href="/contact">
          Request a quote
        </Link>
      </section>

      <section className="blk alt">
        <TyreSizeFinder />
      </section>

      <section className="blk">
        <h2>Tyres for every application</h2>
        <p>
          Contact us for availability and quotations.
          Sizes shown are indicative of our range.
        </p>

        <div className="pc-grid">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <ProductCategory
              key={category.name}
              c={category}
              index={index}
            />
          ))}
        </div>
      </section>

      <TyreCarousel />
    </>
  );
}
