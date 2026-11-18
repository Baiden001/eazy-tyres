
'use client';

import { useMemo, useState } from 'react';
import { BRAND_DETAILS, PRODUCT_CATEGORIES, WA } from '../lib/data';

export default function TyreSizeFinder() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [brand, setBrand] = useState('');

  const allSizes = useMemo(
    () =>
      PRODUCT_CATEGORIES.flatMap((item) =>
        item.sizes.map((size) => ({
          size,
          category: item.name,
          description: item.desc,
        }))
      ),
    []
  );

  const results = allSizes.filter((item) => {
    const term = search.trim().toLowerCase();

    const matchesSearch =
      !term ||
      item.size.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term);

    const matchesCategory =
      category === 'all' || item.category === category;

    return matchesSearch && matchesCategory;
  });

  const enquire = (item) => {
    const message = [
      'Hello Eazy Road Tyres, I found a tyre through your website and would like a quotation.',
      '',
      `Tyre size: ${item.size}`,
      `Vehicle category: ${item.category}`,
      `Preferred brand: ${brand || 'No preference / please advise'}`,
      '',
      'Please confirm availability and pricing.',
    ].join('\n');

    window.open(
      `${WA}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section className="tyre-finder" id="tyre-finder">
      <div className="finder-heading">
        <span>FIND THE RIGHT TYRE</span>
        <h2>Tyre Size Finder</h2>
        <p>
          Search our listed tyre sizes, select your vehicle type
          and send an enquiry directly to our team.
        </p>
      </div>

      <div className="finder-controls">
        <label>
          <span>Search tyre size</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="e.g. 315/80R22.5"
          />
        </label>

        <label>
          <span>Vehicle category</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="all">All vehicle types</option>
            {PRODUCT_CATEGORIES.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Preferred brand</span>
          <select
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
          >
            <option value="">No preference</option>
            {BRAND_DETAILS.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="finder-results-heading">
        <span>AVAILABLE SIZE LISTINGS</span>
        <span>{results.length} results</span>
      </div>

      {results.length > 0 ? (
        <div className="finder-results">
          {results.map((item) => (
            <article
              className="finder-result"
              key={`${item.category}-${item.size}`}
            >
              <div>
                <strong>{item.size}</strong>
                <span>{item.category}</span>
              </div>

              <button
                type="button"
                onClick={() => enquire(item)}
                aria-label={`Enquire about ${item.size}`}
              >
                Enquire <span aria-hidden="true">→</span>
              </button>
            </article>
          ))}
        </div>
      ) : (
        <div className="finder-empty">
          <h3>No matching sizes found</h3>
          <p>
            We may still be able to source your size.
            Contact our team for assistance.
          </p>
          <a
            href={`${WA}?text=${encodeURIComponent(
              `Hello Eazy Road Tyres, I need help finding a tyre size: ${search}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ask us about this size →
          </a>
        </div>
      )}

      <p className="finder-note">
        Listed sizes are indicative of our range. Brand selection,
        stock availability and pricing are confirmed when you enquire.
      </p>
    </section>
  );
}
