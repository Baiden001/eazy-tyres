
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Icon from './Icons';
import { FEATURES, VEHICLES } from '../lib/data';
import {
  HERO_MEDIA_TYPE,
  HERO_IMAGE,
  HERO_VIDEO,
  HERO_ALT,
} from '../lib/site-config';

export default function Hero() {
  const [video, setVideo] = useState(false);

  useEffect(() => {
    if (HERO_MEDIA_TYPE !== 'video') return;

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const isSmallScreen =
      window.matchMedia('(max-width: 700px)').matches;

    setVideo(!prefersReducedMotion && !isSmallScreen);
  }, []);

  return (
    <section className="hero">
      <div className="hero-media">
        <img
          src={HERO_IMAGE}
          alt={HERO_ALT}
          fetchPriority="high"
        />

        {video && (
          <video
            src={HERO_VIDEO}
            poster={HERO_IMAGE}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
            onError={() => setVideo(false)}
          />
        )}
      </div>

      <div className="shade" />

      <div className="hc">
        <div className="hero-kicker rv">
          <span />
          TYRE SUPPLY & FITMENT SPECIALISTS
        </div>

        <h1>
          <span className="ln rv">
            The right tyres.
          </span>
          <span className="ln or rv">
            For every road ahead.
          </span>
        </h1>

        <i className="bar" aria-hidden="true" />

        <p className="rv">
          Dependable tyre solutions for commercial fleets,
          heavy-duty vehicles and everyday driving.
        </p>

        <div className="bt rv">
          <Link className="btn" href="/products">
            EXPLORE OUR TYRES <span aria-hidden="true">→</span>
          </Link>

          <Link className="btn ghost" href="/contact">
            TALK TO OUR TEAM
          </Link>
        </div>

        <div className="sc rv">
          <i />
          Discover Eazy Road Tyres
        </div>
      </div>

      <div className="hbot">
        <div className="hero-vehicles">
          <div className="hero-strip-label">
            TYRES FOR EVERY VEHICLE
          </div>

          <ul className="vehicles" aria-label="Vehicle types we supply tyres for">
            {VEHICLES.map(([type, file]) => (
              <li key={type}>
                <img
                  src={`/assets/vehicles/${file}.png`}
                  alt=""
                  width="120"
                  height="56"
                />
                <span>{type}</span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="feat" aria-label="Our service advantages">
          {FEATURES.map(([icon, title]) => (
            <li key={title}>
              <Icon name={icon} />
              <span>{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
