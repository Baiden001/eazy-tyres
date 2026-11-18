'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV, WA } from '../lib/data';
export default function Header(){
  const p=usePathname(); const [open,setOpen]=useState(false);
  useEffect(()=>{const k=e=>e.key==='Escape'&&setOpen(false);window.addEventListener('keydown',k);return()=>window.removeEventListener('keydown',k)},[]);
  return (<header className={p==='/'?'over':''}>
    <Link href="/" className="logo"><img src="/assets/logo.png" alt="Eazy Road Tyres home"/></Link>
    <button id="mb" aria-label="Menu" aria-expanded={open} aria-controls="primary-nav" onClick={()=>setOpen(!open)}>&#9776;</button>
    <nav id="primary-nav" aria-label="Primary" className={open?'open':''} onClick={()=>setOpen(false)}>{NAV.map(([h,n])=><Link key={h} href={h} className={p===h?'on':''} aria-current={p===h?'page':undefined}>{n}</Link>)}</nav>
    <a className="btn ghost" href={WA} target="_blank" rel="noopener noreferrer">Get in Touch</a></header>);
}
