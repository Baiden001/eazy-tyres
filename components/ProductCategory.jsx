import Link from 'next/link';

export default function ProductCategory({ c, index = 0 }) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <article className="pc">
      <div className="pc-visual" aria-hidden="true">
        <span className="pc-number">{number}</span>
        <div className="pc-wheel">
          <span className="pc-wheel-inner">
            <span />
          </span>
        </div>
        <span className="pc-visual-label">EAZY ROAD TYRES</span>
      </div>

      <div className="pc-content">
        <div className="pc-meta">
          <span>PRODUCT RANGE</span>
          <span>{c.sizes.length} SIZES</span>
        </div>

        <h3>{c.name}</h3>
        <p>{c.desc}</p>

        <div className="pc-size-heading">POPULAR SIZES</div>
        <div className="sizes sm">
          {c.sizes.slice(0, 5).map((s) => (
            <span key={s}>{s}</span>
          ))}
          {c.sizes.length > 5 && (
            <span className="pc-more">+{c.sizes.length - 5} more</span>
          )}
        </div>

        {c.brands.length > 0 && (
          <p className="pc-brands">
            <b>Brands:</b> {c.brands.join(', ')}
          </p>
        )}

        <Link
          className="lk"
          href="/contact"
          aria-label={`Enquire about ${c.name}`}
        >
          Enquire about this range <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
