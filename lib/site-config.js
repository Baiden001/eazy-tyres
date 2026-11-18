// ---- HERO MEDIA (single switch) -------------------------------------------
// "image" -> shows HERO_IMAGE. "video" -> shows HERO_VIDEO over the image.
// To activate video: set HERO_MEDIA_TYPE = "video" and put the file at public/assets/hero.mp4.
// The image stays as poster/fallback (reduced motion, small screens, missing/failed video).
export const HERO_MEDIA_TYPE = "image";
export const HERO_IMAGE = "/assets/hero.jpg";
export const HERO_VIDEO = "/assets/hero.mp4";
export const HERO_ALT = "Tipper truck with large tyres on a road at sunset";

// ---- SITE / SEO -----------------------------------------------------------
// Set NEXT_PUBLIC_SITE_URL (e.g. https://www.eazyroadtyres.com) once the domain is confirmed:
// it enables canonical URLs and Open Graph images. Optional: NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_GSC_VERIFICATION.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";
export const SITEMAP_BASE = SITE_URL || "https://www.eazyroadtyres.com";
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const pageMeta = (title, description, path) => ({
  title, description,
  openGraph: { title: `${title} | Eazy Road Tyres`, description, type: "website", ...(SITE_URL ? { url: path, images: [HERO_IMAGE] } : {}) },
  ...(SITE_URL ? { alternates: { canonical: path } } : {}),
});
