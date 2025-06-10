'use client'
import React, { useRef, useState, useEffect} from "react";
import { reverie } from "@/styles/fonts";
import Image from "next/image";
import { HeroImagesProps } from "@/type/types";
import Mula1 from "/public/images/mula9.jpg";
import Mula2 from "/public/images/mula10.jpg";
import Mula3 from "/public/images/mula11.jpg";
import Mula4 from "/public/images/mulla13.jpg";
import Mula5 from "/public/images/mulla14.jpg";
import Mula6 from "/public/images/mulla15.jpg";
import Mula7 from "/public/gallery/mulla16.jpg";



import { motion, useTransform } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function Hero() {
  const pictures: HeroImagesProps[] = [
    {
      image: Mula1,
      alt: "j mula looking up at the clouds",
      rotate: "rotate-[5deg]",
      zIndex: 7,
    },
    {
      image: Mula2,
      alt: "j mula in a mask",
      rotate: "rotate-[-4deg]",
      zIndex: 6,
    },
    {
      image: Mula3,
      alt: "three men with dark background",
      rotate: "rotate-[7deg]",
      zIndex: 5,
    },
    {
      image: Mula4,
      alt: "j mula with orange shirt and cap on the beach",
      rotate: "rotate-[-1deg]",
      zIndex: 4,
    },
    {
      image: Mula5,
      alt: "j mula posing with graffiti in background",
      rotate: "rotate-[2deg]",
      zIndex: 3,
    },
    {
      image: Mula6,
      alt: "j mula posing with graffiti in background",
      rotate: "rotate-[3deg]",
      zIndex: 2,
    },
    {
      image: Mula7,
      alt: "j mula posing with graffiti in background",
      rotate: "rotate-[4deg]",
      zIndex: 1,
    },

  ];

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const headerContainer = useRef(null)
  const header = useRef(null)

  const [ z, setZ ] = useState(7)

  useGSAP(() => {
    // gsap code here...
    gsap.to(header.current,{
      scale: 4,
      opacity: 0,
      duration: 1.4,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: headerContainer.current,
        start: 'top top',
        end: 'bottom 70%',
        pin: true,
        scrub: true,
        // markers: true
      }
    }); // <-- automatically reverted
    
    gsap.to('.zPic',{
      zIndex: z,
      duration: 2,
      stagger: .6,
      repeat: -1,
      ease: 'power1.in'
    });
    

  }, []);

  return (
    <section ref={headerContainer} className="md:h-[85vh] h-screen overflow-hidden mb-[8rem]">
      <div className="relative flex items-end justify-center h-[85vh] md:h-full">
        <div className="">
          {pictures.map((pic, i) => {
            // setZ(pic.zIndex)
            return (
              <motion.div
                initial={{ opacity: .1 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: i * .8,
                    ease: [0.85, 0, 0.15, 1]
                  }
                }}
                className={`${pic.rotate} z-[${pic.zIndex}] zPic absolute transform top-[50%] md:top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[65vw] h-[85vw] sm:w-[45vw] sm:h-[65vw] md:w-[35vw] md:h-[45vw] xl:w-[25vw] xl:h-[65vh] object-cover`}
                key={pic.rotate}
                
                >
                <Image
                  src={pic.image}
                  alt={pic.alt}
                  className="w-full h-full"
                  placeholder="blur"
                />
                </motion.div>
            );
          })}
        </div>
        <h1
          ref={header}
          className={`${reverie.className} z-[10] text-[18vw] tracking-tighter text-center 2xl:mb-[-.45em] md:mb-[-.35em] sm:mb-[-.15em] mb-[.5em]`}
        >
          Naga Apparel
        </h1>
      </div>
    </section>
  );
}

export default Hero;

type PicProp = {
  pic: HeroImagesProps;
  i: number
}

function HeroPicture({pic, i}: PicProp) {
  const [ z, setZ ] = useState(pic.zIndex)
  
  const zPic = useRef(null)

  function handleZ() {
    setZ(prev => prev + 1)

    if (z === 8) {
      setZ(3)
    }
  }

  return (
    <motion.div
      initial={{ opacity: .1 }}
      animate={{
        opacity: 1,
        transition: {
          delay: i * .8,
          ease: [0.85, 0, 0.15, 1]
        }
      }}
      className={`${pic.rotate} z-[${z}] absolute transform top-[50%] md:top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[65vw] h-[70vhh] md:w-[25vw] md:h-[65vh] object-cover`}
      key={pic.rotate}
      ref={zPic}
    >
      <Image
        src={pic.image}
        alt={pic.alt}
        style={{ width: "100%", height: "100%" }}
        placeholder="blur"
      />
    </motion.div>
  )
}
