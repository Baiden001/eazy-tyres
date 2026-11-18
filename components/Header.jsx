
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV, WA } from '../lib/data';

export default function Header() {
  const p = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the page changes.
  useEffect(() => {
    setOpen(false);
  }, [p]);

  // Allow the Escape key to close the menu.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className={p === '/' ? 'over' : ''}>
      <Link
        href="/"
        className="logo"
        aria-label="Eazy Road Tyres home"
        onClick={() => setOpen(false)}
      >
        <img src="/assets/logo.png" alt="Eazy Road Tyres" />
      </Link>

      <button
        id="mb"
        type="button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? '×' : '☰'}
      </button>

      <nav
        id="primary-nav"
        aria-label="Primary navigation"
        className={open ? 'open' : ''}
        onClick={() => setOpen(false)}
      >
        {NAV.map(([h, n]) => (
          <Link
            key={h}
            href={h}
            className={p === h ? 'on' : ''}
            aria-current={p === h ? 'page' : undefined}
          >
            {n}
          </Link>
        ))}
      </nav>

      <a
        className="btn ghost"
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
      >
        Get in Touch
      </a>
    </header>
  );
}
