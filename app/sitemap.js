import { NAV } from '../lib/data';
import { SITEMAP_BASE } from '../lib/site-config';
export default function sitemap(){return NAV.map(([h])=>({url:SITEMAP_BASE+(h==='/'?'':h),lastModified:new Date()}));}
