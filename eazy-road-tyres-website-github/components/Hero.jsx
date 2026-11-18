'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Icon from './Icons';
import { FEATURES, VEHICLES } from '../lib/data';
import { HERO_MEDIA_TYPE, HERO_IMAGE, HERO_VIDEO, HERO_ALT } from '../lib/site-config';
const d=s=>({'--d':s});
export default function Hero(){
  const [video,setVideo]=useState(false);
  useEffect(()=>{
    if(HERO_MEDIA_TYPE!=='video')return;
    const q=m=>typeof window.matchMedia==='function'&&window.matchMedia(m).matches;
    setVideo(!q('(prefers-reduced-motion: reduce)')&&!q('(max-width: 700px)')); // image fallback for reduced motion / small screens
  },[]);
  return (<section className="hero">
    <div className="hero-media">
      <img src={HERO_IMAGE} alt={HERO_ALT} fetchPriority="high"/>
      {video&&<video src={HERO_VIDEO} poster={HERO_IMAGE} autoPlay muted loop playsInline preload="auto" aria-hidden="true" tabIndex={-1} onError={()=>setVideo(false)}/>}
    </div>
    <div className="shade"/>
    <div className="hc"><h1><span className="ln rv" style={d('.2s')}>Powering every journey.</span><span className="ln or rv" style={d('.45s')}>Keeping industry moving.</span></h1><i className="bar" aria-hidden="true"/>
      <p className="rv" style={d('.8s')}>Premium tyre solutions for commercial transportation and passenger vehicles.</p>
      <div className="bt rv" style={d('1s')}><Link className="btn" href="/products">EXPLORE OUR PRODUCTS &rarr;</Link><Link className="btn ghost" href="/contact">CONTACT US</Link></div>
      <div className="sc rv" style={d('1.2s')}><i/> Scroll to explore</div></div>
    <div className="hbot">
      <ul className="vehicles rv" style={d('1.3s')} aria-label="Vehicle types we supply tyres for">{VEHICLES.map(([t,f])=><li key={t}><img src={`/assets/vehicles/${f}.png`} alt="" width="120" height="56"/>{t}</li>)}</ul>
      <ul className="feat rv" style={d('1.45s')}>{FEATURES.map(([i,t])=><li key={t}><Icon name={i}/>{t}</li>)}</ul>
    </div></section>);
}
