// 'use client'
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { reverie, satoshiLight } from "@/styles/fonts";
import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Fav from "@/pages/favicon.ico";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const slideIn = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 0,
    },
    exit: {
      scaleY: 1,
    },
  };

  const slideOut = {
    initial: {
      scaleY: 1,
    },
    animate: {
      scaleY: 0,
    },
    exit: {
      scaleY: 0,
    },
  };

  const appear = {
    initial: {
      y: 200,
    },
    animate: {
      y: 0,
    },
  };

  const disappear = {
    initial: {
      y: 0,
    },
    animate: {
      y: 200,
    },
  };

  return (
    <AnimatePresence mode="wait">
      <Head>
        <link rel="shortcut icon" href="/mulaLogo.png" />
        <title>Naga Apparel.</title>
      </Head>
      <main key={router.pathname} className={`${satoshiLight.className}`}>
        {/* SLIDE IN ANIMATION */}
        <motion.div
          className="absolute top-0 left-0 w-full h-screen z-[2000] origin-bottom bg-[#DEFDA5] flex justify-center items-center"
          variants={slideIn}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1,
            ease: [0.85, 0, 0.15, 1],
          }}
          exit="exit"
        >
          <div className="overflow-hidden">
            <motion.h2
              variants={appear}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: [0.83, 0, 0.17, 1],
              }}
              className={`${reverie.className} text-[8rem] leading-[.7] text-text`}
            >
              o
            </motion.h2>
          </div>
        </motion.div>
        {/* SLIDE OUT ANIMATION */}
        <motion.div
          className="absolute top-0 left-0 w-full h-screen z-[2000] origin-top bg-[#DEFDA5] flex justify-center items-center"
          variants={slideOut}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 1,
            ease: [0.85, 0, 0.15, 1],
          }}
        >
          <div className="overflow-hidden">
            <motion.h2
              variants={disappear}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
              className={`${reverie.className} text-[8rem] leading-[.7] text-text`}
            >
              o
            </motion.h2>
          </div>
        </motion.div>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </AnimatePresence>
  );
}
