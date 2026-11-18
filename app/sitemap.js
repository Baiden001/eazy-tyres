
import { NAV } from '../lib/data';
import { SITEMAP_BASE } from '../lib/site-config';

export default function sitemap() {
  return NAV.map(([path]) => ({
    url: `${SITEMAP_BASE}${path === '/' ? '' : path}`,
    lastModified: new Date(),
  }));
}
