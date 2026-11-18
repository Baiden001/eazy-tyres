
// ---- HERO MEDIA -----------------------------------------------------------
export const HERO_MEDIA_TYPE = "image";
export const HERO_IMAGE = "/assets/hero.jpg";
export const HERO_VIDEO = "/assets/hero.mp4";
export const HERO_ALT = "Tipper truck with large tyres on a road at sunset";

// ---- SITE / SEO -----------------------------------------------------------
// The approved primary website address.
// Override NEXT_PUBLIC_SITE_URL only if the primary domain changes.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://eazytyres.ashelitegroups.com";

export const SITEMAP_BASE = SITE_URL.replace(/\/$/, "");
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const pageMeta = (title, description, path) => ({
  title,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    title: `${title} | Eazy Road Tyres`,
    description,
    type: "website",
    siteName: "Eazy Road Tyres",
    locale: "en_GH",
    url: path,
    images: [HERO_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Eazy Road Tyres`,
    description,
    images: [HERO_IMAGE],
  },
});
