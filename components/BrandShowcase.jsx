
import { BRAND_DETAILS, BRANDS_INTRO } from '../lib/data';

export default function BrandShowcase() {
  return (
    <section className="brand-showcase">
      <div className="brand-heading">
        <span>OUR BRAND SELECTION</span>
        <h2>Trusted Brands. Proven Performance.</h2>
        <p>{BRANDS_INTRO}</p>
      </div>

      <div className="bgrid">
        {BRAND_DETAILS.map((brand) => (
          <article className="bc" key={brand.name}>
            <div className="bc-logo">
              <img
                src={brand.logo}
                alt={`${brand.name} tyre logo`}
                loading="lazy"
              />
            </div>
            <h3>{brand.name}</h3>
            <span className="bc-origin">{brand.origin}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
