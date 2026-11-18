
import { SITEMAP_BASE } from '../lib/site-config';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITEMAP_BASE}/sitemap.xml`,
  };
}
