import './globals.css';
import Script from 'next/script';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SITE_URL, GA_ID } from '../lib/site-config';
const desc='Premium tyre solutions for commercial transportation and passenger vehicles. Tyre supply and fitment in Tarkwa, Ghana.';
export const metadata={...(SITE_URL?{metadataBase:new URL(SITE_URL)}:{}),title:{default:'Eazy Road Tyres',template:'%s | Eazy Road Tyres'},description:desc,
  openGraph:{siteName:'Eazy Road Tyres',type:'website',locale:'en_GH'},
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION?{verification:{google:process.env.NEXT_PUBLIC_GSC_VERIFICATION}}:{})};
export default function RootLayout({children}){
  return (<html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@1,800;1,900&family=Inter:wght@400;500;600&display=swap"/></head>
  <body><Header/><main>{children}</main><Footer/>
  {GA_ID&&<><Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive"/><Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`}</Script></>}</body></html>);
}
