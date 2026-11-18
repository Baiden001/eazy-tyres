# Eazy Road Tyres (Next.js, App Router)
Commands: npm install · npm run dev · npm run build · npm start · npm test

## Hero image / video (one switch)
Edit lib/site-config.js:  HERO_MEDIA_TYPE = "image" | "video"
- Image: public/assets/hero.jpg (replace the file to change it)
- Video: put public/assets/hero.mp4 there and set HERO_MEDIA_TYPE = "video". The image stays as poster/fallback
  (reduced-motion, screens <= 700px, or if the video fails to load). Layout does not change.

## Content
All content lives in lib/data.js (navigation, contact, brands, sizes, product categories, carousel, industries, services, stats).

## SEO
Set NEXT_PUBLIC_SITE_URL once the domain is confirmed (enables canonical URLs and Open Graph images).
Optional: NEXT_PUBLIC_GA_ID (Google Analytics), NEXT_PUBLIC_GSC_VERIFICATION (Search Console). Nothing is loaded when unset.
