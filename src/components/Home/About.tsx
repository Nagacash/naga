"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { reverie, satoshiItalic, satoshiMedium } from "@/styles/fonts";
import SpinningStar from "../SpinningStar";
import { AboutImagesProps } from "@/type/types";
import Picture1 from "../../../public/gallery/mulla19.jpg";
import Picture2 from "../../../public/gallery/mulla18.jpg";
import Picture3 from "../../../public/images/mulla14.jpg";
import Picture4 from "../../../public/images/aboutMula4.png";
import { motion, useTransform, useScroll, useInView } from "framer-motion";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { register } from "module";
import { repeatedAboutText } from "@/utils/aboutCarousel";

function About() {
  const introText1 = useRef(null);
  const introInView1 = useInView(introText1, { once: true });
  const introText2 = useRef(null);
  const introInView2 = useInView(introText2, { once: true });
  const introText3 = useRef(null);
  const introInView3 = useInView(introText3, { once: true });
  const introText4 = useRef(null);
  const introInView4 = useInView(introText4, { once: true });

  const descText = useRef(null);
  const descTextInView = useInView(descText, { once: true });

  const aboutImageContainer = useRef(null);
  const aboutImage = useRef(null);

  useGSAP(() => {
    // gsap code here...
    gsap.to(aboutImage.current, {
      scale: 1.3,
      y: 10,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: aboutImageContainer.current,
        start: "top 150%",
        end: "bottom -50%",
        scrub: true,
      },
    });
  }, []);

  const arise = {
    initial: {
      opacity: 0,
      y: 200,
      rotateZ: -7,
    },
    animate: {
      opacity: 1,
      y: 0,
      rotateZ: 0,
      transition: {
        duration: 1,
        delay: 0.2,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const appear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.2,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const descAppear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.8,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  return (
    <>
      <section className="" id="about">
        {/* LARGE LETTER QUOTE */}
        <div className="relative mb-[30vh]">
          <div
            className="flex items-center justify-center gap-6 overflow-hidden"
            ref={introText1}
          >
            <motion.div
              variants={appear}
              initial="initial"
              animate={introInView1 && "animate"}
            >
              <SpinningStar size="8vw" />
            </motion.div>
            <motion.h3
              variants={arise}
              initial="initial"
              animate={introInView1 && "animate"}
              className={`${satoshiMedium.className} tracking-tight leading-[.9] text-[14vw]`}
            >
              <span className={`${satoshiItalic.className}`}>Knowledge</span>-and
            </motion.h3>
          </div>
          <div
            className="flex justify-center pr-[14vw] overflow-hidden"
            ref={introText2}
          >
            <motion.h3
              variants={arise}
              initial="initial"
              animate={introInView2 && "animate"}
              className={`${satoshiMedium.className} tracking-tight leading-[.9] text-[14vw]`}
            >
              QUALITY
            </motion.h3>
          </div>
          <div
            className="flex items-center justify-center gap-6 overflow-hidden"
            ref={introText3}
          >
            <motion.div
              variants={appear}
              initial="initial"
              animate={introInView3 && "animate"}
              className="w-[8vw] object-cover"
            >
              <Image
                src={Picture2}
                alt="j mula in a mask opening a red ring box"
                className="w-full h-full"
              />
            </motion.div>
            <motion.h3
              variants={arise}
              initial="initial"
              animate={introInView3 && "animate"}
              className={`${satoshiItalic.className} tracking-tight leading-[.9] text-[14vw] mix-blend-difference`}
            >
              OVER
            </motion.h3>
          </div>
          <div className="flex justify-center overflow-hidden" ref={introText4}>
            <motion.h3
              variants={arise}
              initial="initial"
              animate={introInView4 && "animate"}
              className={`${satoshiMedium.className} tracking-tight leading-[.9] text-[14vw] mix-blend-difference`}
            >
              Ignorance
            </motion.h3>
          </div>
          {/* ABSOLUTE IMAGE */}
          <div
            ref={aboutImageContainer}
            className="overflow-hidden absolute bottom-[-20%] right-[20%] z-[-1] w-[20vw] object-cover"
          >
            <Image
              ref={aboutImage}
              src={Picture1}
              alt="scenic background with man on platform"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
      {/* VIDEO ABOUT SECTION WITH COLOR DODGE BACKGROUND*/}
      <section>
        <div className="relative mb-[8rem] sm:h-[40vh] md:h-[65vh] xl:[80vh] h-[30vh] overflow-hidden flex items-end">
          <video
            className="absolute w-full mix-blend-color"
            autoPlay
            loop
            muted
            preload="none"
          >
            <source
              src="/images/momo.mp4"
            />
          </video>
          {/* MORE DETAILED PARAGRAPH */}
          <div className="px-10 pb-8 overflow-hidden" ref={descText}>
            <motion.div
              variants={descAppear}
              initial="initial"
              animate={descTextInView && "animate"}
            >
              <SpinningStar size="40px" />
            </motion.div>
            <motion.h4
              variants={descAppear}
              initial="initial"
              animate={descTextInView && "animate"}
              className={`${satoshiMedium.className} mt-6 text-[3.5vw] tracking-tight leading-tight uppercase`}
            >
              Naga Apparel embodies the future of urban style. We fuse cutting-edge design with bold self-expression, creating unique streetwear that empowers you. Discover collections like "The Golden Drip" and "Hustle Hard Gym Drip," crafted for those who define trends, not follow them. Elevate your wardrobe with our innovative spirit. #NagaApparel #UrbanStyle #FutureFashion #Streetwear #Innovation
            </motion.h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
