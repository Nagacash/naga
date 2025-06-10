// 'use client'
import React, { useEffect } from 'react'
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import LatestRelease from "@/components/Home/LatestRelease";
import Artists from "@/components/Home/Artists";
import Gallery from "@/components/Home/Gallery";
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Home() {
  // gsap.registerPlugin(useGSAP);
  // gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="">
      <Hero/>
      <About/>
      <LatestRelease/>
      <Artists/>
      <Gallery/>
    </div>
  );
}
