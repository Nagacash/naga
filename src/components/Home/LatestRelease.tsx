import React, { useState } from "react";
import Image from "next/image"; // Make sure Next.js Image is imported
import ArtistPic from "/public/images/hat1.jpg"; // Correctly import the local image
import { latestRelease } from "@/utils/latestRelease";
import { satoshiMedium } from "@/styles/fonts";
import { PlayIcon } from "@heroicons/react/24/solid";
// import CloudImage from "../CloudImage"; // You no longer need CloudImage
import { motion } from "framer-motion";
import parse from 'html-react-parser';

function LatestRelease() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const videoDetails = [
    {
      title: "Video Director",
      name: latestRelease.videoDirector,
    },
    {
      title: "Manager",
      name: latestRelease.manager,
    },
    {
      title: "Producer",
      name: latestRelease.producer,
    },
  ];

  const flexBox = {
    initial: {
      flex: 1,
    },
    animate: {
      flex: 2,
      transition: {
        delay: 0.7,
        duration: 1,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  return (
    <section>
      <div className="px-6 mb-8">
        {/* LATEST RELEASE HEADER */}
        <div className="flex items-center gap-5">
          <div className="h-[1px] w-[30px] bg-text opacity-50"></div>
          <div className="uppercase">Latest Updates</div>
        </div>
        {/* MAIN SECTION */}
        <div className="flex md:flex-row flex-col gap-4 mt-6 ">
          {/* VIDEO WITH VIDEO DETAILS   */}
          <motion.div
            variants={flexBox}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex-[2]"
          >
            {isVideoOpen ? (
              <div className="rounded-[20px] h-[70vh] w-full">
                {parse(latestRelease.youtubeLink)}
              </div>
            ) : (
              <div
                onClick={() => setIsVideoOpen(true)}
                className="cursor-pointer w-full h-[70vh] bg-no-repeat bg-center bg-cover rounded-[20px] latest-release-bg"
                role="button"
                tabIndex={0}
              >
                <div className="flex justify-center items-center h-full">
                  <PlayIcon color="#DEFDA5" className="h-14 w-14" />
                </div>
              </div>
            )}
            <div className="flex justify-between items-start mt-3">
              {videoDetails.map((det) => {
                return (
                  <div key={det.title} className="">
                    <p className="uppercase opacity-50 tracking-tight text-center">
                      {det.title}
                    </p>
                    <p className="tracking-tight text-center">{det.name}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
          {/* VIDEO TITLE WITH ARTIST NAME AND ARTIST IMAGE */}
          <div className="flex-[1]">
            <div className="bg-[#DEFDA5] rounded-[20px] p-6 md:pl-10 mb-4 text-background">
              <h6
                className={`text-right text-[40px] md:text-[4vw] ${satoshiMedium.className} leading-[1] tracking-tighter`}
              >
                {latestRelease.title}
              </h6>
              <div className="flex gap-4 justify-end items-center mb-10 mt-4">
                <div className="h-[1px] w-[8rem] bg-background opacity-50"></div>
                <div
                  className={`uppercase text-[22px] md:text-[32px] ${satoshiMedium.className} tracking-tighter`}
                >
                  {latestRelease.artistName}
                </div>
              </div>
            </div>
            {/* IMAGE OF ARTIST WITH LOCAL IMAGE */}
            <div className="w-full rounded-[20px]">
              {/* --- THIS IS THE CHANGED PART --- */}
              <Image
                src={ArtistPic}
                alt={`latest release artist ${latestRelease.artistName}`}
                className="rounded-[20px]"
                style={{ width: '100%', height: 'auto' }} // Ensures responsiveness
                placeholder="blur" // Optional: adds a nice blur effect while loading
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestRelease;