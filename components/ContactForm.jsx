'use client';
import { useState } from 'react';
import { WA } from '../lib/data';
export default function ContactForm(){
  const [err,setErr]=useState({}); const [sent,setSent]=useState(false);
  const submit=e=>{e.preventDefault();const d=new FormData(e.currentTarget);const v=k=>(d.get(k)||'').toString().trim();
    const er={};if(!v('n'))er.n='Please enter your full name.';if(!v('m'))er.m='Please enter a message.';
    setErr(er);setSent(false);if(Object.keys(er).length)return;
    const t=['Hello Eazy Road Tyres,',`Name: ${v('n')}`,v('c')?`Company: ${v('c')}`:null,v('p')?`Phone: ${v('p')}`:null,v('s')?`Tyre size / application: ${v('s')}`:null,'',v('m')].filter(x=>x!==null).join('\n');
    window.open(`${WA}?text=${encodeURIComponent(t)}`,'_blank','noopener');setSent(true);};
  const F=({k,label,children})=>(<label className="f">{label}{children}{err[k]&&<span className="err" role="alert">{err[k]}</span>}</label>);
  return (<form onSubmit={submit} noValidate>
    <F k="n" label="Full name *"><input name="n" aria-label="Full name" aria-invalid={!!err.n} autoComplete="name"/></F>
    <F k="c" label="Company name"><input name="c" aria-label="Company name" autoComplete="organization"/></F>
    <F k="p" label="Phone number"><input name="p" type="tel" aria-label="Phone number" autoComplete="tel"/></F>
    <F k="s" label="Tyre size or application"><input name="s" aria-label="Tyre size or application" placeholder="e.g. 265/65R17, SUV"/></F>
    <F k="m" label="Message *"><textarea name="m" rows={5} aria-label="Message" aria-invalid={!!err.m}/></F>
    <button className="btn">Send on WhatsApp</button>
    {sent&&<p className="ok" role="status">Opening WhatsApp with your enquiry…</p>}</form>);
}
