import { render, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
vi.mock('../lib/site-config',()=>({HERO_MEDIA_TYPE:'video',HERO_IMAGE:'/assets/hero.jpg',HERO_VIDEO:'/assets/hero.mp4',HERO_ALT:'Hero'}));
import Hero from '../components/Hero';
const mm=m=>(window.matchMedia=q=>({matches:m.includes(q)}));
test('video mode: muted looping autoplay video over the image, no controls',async()=>{
  mm([]); const {container}=render(<Hero/>);
  await waitFor(()=>expect(container.querySelector('video')).not.toBeNull());
  const v=container.querySelector('video');
  expect(v).toHaveAttribute('src','/assets/hero.mp4'); expect(v).toHaveAttribute('poster','/assets/hero.jpg');
  expect(v.muted).toBe(true); expect(v.loop).toBe(true); expect(v.autoplay).toBe(true); expect(v.controls).toBe(false);
  expect(container.querySelector('.hero-media img')).not.toBeNull();
  fireEvent.error(v); await waitFor(()=>expect(container.querySelector('video')).toBeNull());
});
test('video mode falls back to the image for reduced motion',async()=>{
  mm(['(prefers-reduced-motion: reduce)']); const {container}=render(<Hero/>);
  await new Promise(r=>setTimeout(r,30)); expect(container.querySelector('video')).toBeNull();
});
