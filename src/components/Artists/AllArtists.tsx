import React, { Fragment } from "react";
import { allArtists } from "@/utils/artistData";
import { reverie, satoshiRegular } from "@/styles/fonts";
import Link from "next/link";
import Cover from "../Cover";
import { motion } from "framer-motion";

function AllArtists() {
  const appear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const artistAppear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <section className="px-5">
      <div className="mb-[4rem] border-b-[1px] border-b-text30 pb-[4rem]">
        <motion.h1
          variants={appear}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={`${reverie.className} text-[12vw] tracking-tight text-center mb-8`}
        >
          all artists ({allArtists.length})
        </motion.h1>
        <motion.div
          variants={artistAppear}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 2xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:w-[90%] md:w-[75%] w-full place-items-center gap-y-12 mx-auto"
        >
          {allArtists.map((artist, i) => {
            return (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: i * 0.08,
                    duration: 0.4,
                    ease: [0.76, 0, 0.24, 1],
                  },
                }}
                viewport={{ once: true }}
                key={artist.id}
                className="relative sm:w-[16rem] sm:h-[16rem] 2xl:w-[20rem] 2xl:h-[20rem] w-[50vw] h-[50vw] rounded-full bg-cover bg-no-repeat bg-center group"
                style={{ backgroundImage: `url(${artist.portraitImage})` }}
              >
                <Link href={`/artists/${artist.artistName}`}>
                  <Cover visible={false} rounded>
                    <p
                      className={`${satoshiRegular.className} text-white uppercase text-[20px]`}
                    >
                      {artist.artistName}
                    </p>
                  </Cover>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default AllArtists;
