"use client";
import React, { useState, useRef } from "react";
import { satoshiMedium } from "@/styles/fonts";
import Image from "next/image";
import Picture from "../../../public/images/misc2.jpg";
import Picture2 from "../../../public/images/mulla22.jpg";
import CustomCursor from "../CustomCursor";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

function Transition() {
  const firstPart = "Hustle and";
  const secondPart = "and succeed!";

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [isHovered, setIsHovered] = useState(false);

  function windowMouse(e: React.MouseEvent<HTMLDivElement>) {
    setX(e.clientX);
    setY(e.clientY);
  }

  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  const appear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  
  const imageAppear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const imageClip = {
    initial: {
      clipPath: "polygon(0 0, 0 0, 24% 100%, 24% 100%)",
    },
    animate: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        delay: 0.8,
        duration: 0.7,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  return (
    <section className="px-5">
      <div ref={titleRef} className="flex items-center flex-wrap gap-[3vw]">
        {firstPart.split(" ").map((part, index) => {
          return (
            <div key={`part_${index + 1}`} className="overflow-y-hidden">
              <motion.h2
                initial={{ y: "10vh" }}
                animate={
                  titleInView && {
                    y: "0vh",
                    transition: {
                      duration: 1,
                      delay: index * 0.08,
                      ease: [0, 0.55, 0.45, 1],
                    },
                  }
                }
                transition={{ delay: 0.8 }}
                className={`${satoshiMedium.className} text-[12vw] tracking-tighter leading-[0.8] uppercase`}
              >
                {part}
              </motion.h2>
            </div>
          );
        })}
        <motion.div
          variants={imageAppear}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="sm:h-[10vh] md:h-[12vh] xl:h-[16vh] 2xl:h-[20vh] w-[35vw] h-[7vh] rounded-xl object-cover object-top"
        >
          <Image
            src={Picture}
            alt="sky during sunset"
            placeholder="blur"
            className="w-full h-full rounded-full"
          />
        </motion.div>
        {secondPart.split(" ").map((part, index) => {
          return (
            <div key={`part_${index + 1}`} className="overflow-y-hidden">
              <motion.h2
                initial={{ y: 250 }}
                animate={
                  titleInView && {
                    y: 0,
                    transition: {
                      duration: 1,
                      delay: index * 0.09,
                      ease: [0, 0.55, 0.45, 1],
                    },
                  }
                }
                transition={{ delay: 0.8 }}
                className={`${satoshiMedium.className} text-[12vw] tracking-tighter leading-[0.8] uppercase`}
              >
                {part}
              </motion.h2>
            </div>
          );
        })}
        <Link href="/contact">
          <motion.div
            variants={imageAppear}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={windowMouse}
            className=" relative sm:h-[10vh] md:h-[12vh] xl:h-[16vh] 2xl:h-[20vh] w-[35vw] h-[7vh] rounded-xl object-cover object-top duration-[.3s] hover:cursor-none group"
          >
            <Image
              src={Picture}
              alt="sky during sunset"
              placeholder="blur"
              className="w-full h-full rounded-full group-hover:mix-blend-color-dodge"
            />
            <CustomCursor
              x={x}
              y={y}
              isHovered={isHovered}
              className="p-3 md:w-[120px] md:h-[120px] w-[90px] h-[90px] bg-white"
            >
              <p
                className={`${satoshiMedium.className} text-text sm:text-[22px] text-[18px] text-center leading-[1] tracking-tighter`}
              >
                HOLLA AT US
              </p>
            </CustomCursor>
          </motion.div>
        </Link>
      </div>
      <div className="flex items-end gap-8 my-[4rem] sm:w-[80%] md:w-[75%] lg:w-[65%] w-[85%] mx-auto sm:flex-row flex-col-reverse">
        <div className="flex-1 sm:pl-0 pl-[4rem]">
          <motion.p
            variants={appear}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="md:text-[16px] 2xl:text-[22px] text-[13px]"
          >
             Need Bookings or Event Organization? <br></br>
Looking to book an artist or planning an event? Maybe you&apos;ve got another idea in mind? Reach out to us! We&apos;re always open to new possibilities and ready to help you bring your vision to life.

We&apos;ve got a proven track record, having worked with incredible talents like Nolay, Rowdy Rebel, Kitty Kat, OTW, Capuz, Miss La Familia, Boot Camp Clique, and Redman, just to name a few.

Don&apos;t hesitate to get in touch—we might just be able to work something out!
          </motion.p>
        </div>
        <motion.div
          variants={imageClip}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex-[2] object-cover object-bottom sm:pr-0 pr-[4rem]"
        >
          <Image
            src={Picture2}
            alt=""
            className="w-full h-full rounded-xl mix-blend-normal"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Transition;
