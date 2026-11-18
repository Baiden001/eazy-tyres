
import './globals.css';
import Script from 'next/script';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SITE_URL, GA_ID } from '../lib/site-config';

const desc =
  'Eazy Road Tyres supplies tyres for trucks, trailers, commercial fleets, SUVs and saloon cars in Tarkwa, Ghana. Explore leading tyre brands and professional tyre services.';

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Eazy Road Tyres | Truck, Trailer and Car Tyres in Ghana',
    template: '%s | Eazy Road Tyres',
  },

  description: desc,

  keywords: [
    'tyres in Ghana',
    'truck tyres Ghana',
    'trailer tyres Ghana',
    'commercial vehicle tyres',
    'fleet tyre supplier Ghana',
    'tyre supplier Tarkwa',
    'tipper truck tyres',
    'light truck tyres',
    'SUV tyres Ghana',
    'car tyres Ghana',
    'Michelin tyres Ghana',
    'Goodyear tyres Ghana',
    'Continental tyres Ghana',
    'Bridgestone tyres Ghana',
    'Apollo tyres Ghana',
    'Yokohama tyres Ghana',
    'Triangle tyres Ghana',
    'Linglong tyres Ghana',
  ],

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Eazy Road Tyres | Truck, Trailer and Car Tyres in Ghana',
    description: desc,
    siteName: 'Eazy Road Tyres',
    type: 'website',
    locale: 'en_GH',
    url: SITE_URL,
    images: ['/assets/hero.jpg'],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Eazy Road Tyres | Tyre Solutions in Ghana',
    description: desc,
    images: ['/assets/hero.jpg'],
  },

  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
        },
      }
    : {}),
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Eazy Road Tyres (PTY) LTD',
  url: SITE_URL,
  description: desc,
  telephone: '+233257510997',
  email: 'eazyroadtyres@ashelitegroup.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tarkwa',
    addressRegion: 'Western Region',
    addressCountry: 'GH',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Ghana',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@1,800;1,900&family=Inter:wght@400;500;600&display=swap"
        />
      </head>

      <body>
        <Header />
        <main>{children}</main>
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema).replace(/</g, '\\u003c'),
          }}
        />

        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
