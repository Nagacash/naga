"use client";

import { reverie, satoshiRegular } from "@/styles/fonts";
import React, { useState, useRef, useEffect } from "react"; // Import useEffect
//import Instagram from "../../public/socials/icons8-instagram-50.png";

import Web from "../../public/socials/icons8-website-64.png";
import Tiktok from "../../public/socials/icons8-tiktok-50.png";
import TalkImage from "../../public/images/letsTalk.png";
import Image from "next/image";
import Link from "next/link";
import CustomCursor from "./CustomCursor";
// Import the necessary icons
import { ArrowUpRightIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import { motion, useInView } from "framer-motion";

function Footer() {
  const socials = [
    {
      icon: Web,
      href: "https://eu.jotform.com/agent/01974f267d1373be9de5b9d9d665c3497851",
      alt: "instagram logo",
    },
  ];

  const details = [
    {
      title: "phone",
      field: "(49) 17629255188",
    },
    {
      title: "address",
      field: "St.Pauli, Hamburg, DE",
    },
  ];

  const navMenu = [
    {
      href: "/",
      title: "home",
    },
    {
      href: "/#about",
      title: "about",
    },
    {
      href: "/artists",
      title: "artists",
    },
    {
      href: "/#gallery",
      title: "gallery",
    },
    {
      href: "/contact",
      title: "contact",
    },
  ];

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [email, setEmail] = useState("chosenfewrecords@hotmail.de");
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // --- START: SCROLL-TO-TOP LOGIC ---
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up a scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // --- END: SCROLL-TO-TOP LOGIC ---


  function windowMouse(e: React.MouseEvent<HTMLDivElement>) {
    setX(e.clientX);
    setY(e.clientY);
  }

  const appear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: .5,
        duration: 0.5,
      },
    },
  };

  const oracle = {
    initial: {
      rotate: 80,
    },
    animate: {
      rotate: 0,
      transition: {
        delay: .5,
        duration: 1.2,
        ease: [0.65, 0, 0.35, 1]
      },
    },
  };

  // CHECKS TO SEE IF VIEWPORT IS IN VIEW
  const ref = useRef(null);
  const detail = useRef(null);
  const inView = useInView(ref, { once: true });
  const detailInView = useInView(detail, { once: true });

  return (
    <footer className="px-6">
      <CustomCursor
        x={x}
        y={y}
        isHovered={isHovered}
        className="w-[100px] h-[100px] bg-white"
      >
        <ArrowUpRightIcon className="w-12 h-12" color="#FA9600" />
      </CustomCursor>

      {/* --- START: SCROLL-TO-TOP BUTTON JSX --- */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-accent rounded-full text-white shadow-lg hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 transition-opacity duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="h-6 w-6" />
        </button>
      )}
      {/* --- END: SCROLL-TO-TOP BUTTON JSX --- */}


      <div className="border-t-[1px] border-t-text30">
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={windowMouse}
          ref={ref}
          className="hover:cursor-none hover:scale-[0.98] duration-[.4s] flex justify-center items-center overflow-hidden"
        >
          {email.split("").map((ele, index) => {
            return (
              <a key={`${ele}_${index}`} href="mailto:chosenfewrecords@hotmail.de" className="hover:cursor-none">
                <motion.h5
                  initial={{ y: 200 }}
                  animate={
                    inView && {
                      y: 0,
                      transition: {
                        delay: index * 0.08,
                        ease: [0, 0.55, 0.45, 1],
                        duration: 1,
                      },
                    }
                  }
                  className={`${reverie.className} text-center text-[8vw] mt-[6rem] md:mt-[10rem] leading-[1.2]`}
                >
                  {ele}
                </motion.h5>
              </a>
            );
          })}
        </motion.div>
        <div ref={detail} className="flex md:flex-row md:items-end md:gap-[4rem] flex-col-reverse mt-8">
           {/* ...rest of your footer content... */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;