'use client'
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { reverie, satoshiLight } from "@/styles/fonts";
import "../styles/globals.css";
import Head from "next/head";
import Fav from "@/pages/favicon.ico";
import CookieBanner from "@/components/CookieBanner";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/mulaLogo.png" />
        <title>Naga Apparel.</title>
      </Head>
      <main key={router.pathname} className={`${satoshiLight.className}`}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <CookieBanner />
      </main>
    </div>
  );
}