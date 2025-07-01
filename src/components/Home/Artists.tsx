import React, { Fragment, useState, useRef, useEffect, MutableRefObject } from "react";
import { reverie, satoshiRegular } from "@/styles/fonts";
import { allArtists } from "@/utils/artistData";
import { HomeArtistProps, Cursor } from "@/type/types";
import { ArrowUpRightIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import CustomCursor from "../CustomCursor";
import CloudImage from "../CloudImage";
import SpinningStar from "../SpinningStar";
import { motion, useInView } from "framer-motion";
import { SOrNoS } from "@/utils/miscellaneous";
import Link from "next/link";
import Image from "next/image";

function Artists() {
  const mainTitle = 'ARTISTS'

  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  const appear = {
    initial: {
      opacity: 0
    }, 
    animate: (i: number) => ({
      opacity: 1,
      transition: {
        duration: 1,
        delay: i * .1
      }
    })
  }

  return (
    <section>
      <div className="px-5 mt-[8rem]">
        <div ref={titleRef} className="py-4 border-t-[1px] border-t-text30 border-b-[1px] border-b-text30 flex justify-center items-center overflow-hidden">
          {mainTitle.split('').map((ele, index) => {
            return (
              <motion.h2
                key={`${ele}_${index}`}
                initial={{ y: 400, rotateZ: 5 }}
                animate={titleInView && {
                  rotateZ: 0,
                  y: 0,
                  transition: {
                    duration: 1,
                    delay: index * .1,
                    ease: [0, 0.55, 0.45, 1]
                  }
                }}
                transition={{ delay: 1 }}
                className={`text-center ${satoshiRegular.className} text-[25vw] tracking-tight my-[-.3em]`}
              >
                {ele}
              </motion.h2>

            )
          })}
        </div>
        <div>
          {allArtists.map((artist, index) => {
            return (
              <motion.div 
                key={artist.id}
                custom={index}
                variants={appear}
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                transition={{ delay: .8 }}
                >
                <ArtistContainer
                  artistName={artist.artistName}
                  artistTitles={artist.artistTitles}
                  landscapeImage={artist.landscapeImage}
                  albums={artist.albums}
                  eps={artist.eps}
                  singles={artist.singles}
                />
              </motion.div>
            );
          })}
        </div>
        {/* ARTISTS SECTION BUTTON WITH ARROW */}
        <div
          className="flex justify-center items-center mt-[5rem]"
          id="gallery"
        >
          <Link href="/artists">
            <div className="px-6 py-2 flex items-center cursor-pointer gap-8 w-fit rounded-[30px] border-[1.5px] border-accent group hover:bg-accent duration-[.4s]">
              <button
                className={`${satoshiRegular.className} text-white md:text-[24px] text-[18px] group-hover:text-background duration-[.4s]`}
              >
                VIEW ARTISTS
              </button>
              <ArrowRightIcon
                color="#fff"
                className="md:w-7 md:h-7 w-5 h-5 duration-[.4s] group-hover:translate-x-[10px] group-hover:text-background"
                strokeWidth={1.5}
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Artists;

function ArtistContainer({
  artistName,
  artistTitles,
  landscapeImage,
  albums,
  eps,
  singles,
}: HomeArtistProps) {
  // Initializing x and y for the cursor when hovered
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [isHovered, setIsHovered] = useState(false);

  function windowMouse(e: React.MouseEvent<HTMLDivElement>) {
    setX(e.clientX);
    setY(e.clientY);
  }

  const artistCollection = [
    {
      title: 'Album',
      collection: albums
    },
    {
      title: 'Naga Jam',
      collection: eps
    },
    {
      title: 'Showcases',
      collection: singles
    },

  ]

  const artistVariant = {
    initial: {
      y: 200
    },
    animate: (i: number) => ({
      y: 0,
      transition: {
        delay: i * .08,
        duration: 1.2,
        ease: [0.65, 0, 0.35, 1]
      }
    }),

  }

  return (
    <Link href={`/artists/${artistName}`}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={windowMouse}
        className={`${
          isHovered ? "cursor-none" : "cursor-default"
        } border-b-[1px] border-b-text30 relative py-6 md:px-8 flex md:flex-row flex-col-reverse group`}
      >
        {/* CURSOR ON HOVER */}
        <CustomCursor
          x={x}
          y={y}
          isHovered={isHovered}
          className="md:w-[120px] md:h-[120px] w-[90px] h-[90px] bg-white"
        >
          <ArrowUpRightIcon
            className="md:w-12 md:h-12 w-9 h-9"
            color="#FA9600"
            strokeWidth={1.5}
          />
        </CustomCursor>
        <div className="md:flex-[2] flex flex-col md:mt-0 mt-6">
          {/* ARTIST NAME ANIMATION */}
          <div>
            <div className={`relative overflow-hidden`}> 
              <div className={`${isHovered ? 'hidden' : 'block'}`}>
              <motion.h4
                      className={`${reverie.className} duration-500 md:text-[7vw] text-[60px] leading-[.9] md:text-left text-center`}
                    >
                      {artistName.split('').map((el, i) => {
                        return (
                          el === ' ' ? <span key={`${el}_${i}`} className="mr-[1.5vw] duration-500"></span> : <span key={`${el}_${i}`}>{el}</span>
                        )
                      })}
                    </motion.h4>
              </div>
              <div className={`${isHovered ? 'block' : 'hidden'} duration-500 flex gap-0 justify-center items-center md:justify-normal md:items-baseline`}>
                {artistName.split('').map((ele, index) => {
                  return (
                    <motion.h4
                      key={`${ele}_${index}`}
                      variants={artistVariant}
                      custom={index}
                      initial='initial'
                      animate={isHovered && 'animate'}
                      className={`${reverie.className} md:text-[7vw] text-[60px] leading-[.9] md:text-left text-center`}
                    >
                      {ele === ' ' ? <span className="mr-[1.5vw] duration-500"></span> : ele}
                    </motion.h4>

                  )
                })}
              </div>
            </div>
            {/* RENDERS THE NUMBER OF SINGLES, ALBUMS, AND EPS */}
            <div className="flex items-center md:justify-start justify-center gap-3 mt-[-.1em]">
              {
                artistCollection.map((artist, index) => {
                  return (
                    artist.collection.length ?
                    <Fragment key={artist.title}>
                      <p className="text-[20px]">
                        {/* SOrNoS function adds an 's' after the string if the length of the collection is not equal to 1 */}
                        {artist.collection.length} {artist.title}{SOrNoS(artist.collection)}
                      </p>
                      {index !== artistCollection.length - 1 ? <SpinningStar size="10px" /> : null}
                    </Fragment>
                    :
                    null
                  )
                })
              }
            </div>
          </div>
          {/* TITLES OF ARTIST */}
          <div className="flex items-center md:justify-start justify-center gap-6 mt-auto">
            {artistTitles.map((title) => {
              return (
                <p key={title} className="capitalize text-[20px]">
                  {title}
                </p>
              );
            })}
          </div>
        </div>
        <motion.div className="md:flex-[1.5] max-h-[45vh] w-full object-cover">
          <CloudImage
            image={landscapeImage}
            width={1920}
            height={1080}
            alt={`image of ${artistName}`}
            className="w-full h-full duration-[.4s] group-hover:scale-[.95] group-hover:ease-[cubic-bezier(0.85, 0, 0.15, 1)]"
          />
        </motion.div>
      </div>
    </Link>
  );
}