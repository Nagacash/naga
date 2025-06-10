"use client";
import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { allArtists } from "@/utils/artistData";
import { ArtistProps, Collections } from "@/type/types";
import { usePathname } from "next/navigation";
import Cover from "@/components/Cover";
import ArtistsWorks from "@/components/ArtistDetail/ArtistsWorks";
import SpotifyEmbed from "@/components/ArtistDetail/SpotifyEmbed";
import { reverie, satoshiBold, satoshiMedium } from "@/styles/fonts";
import SpinningStar from "@/components/SpinningStar";
import { SocialIcon } from "react-social-icons";
import PreviousArtist from "@/components/ArtistDetail/PreviousArtist";
import NextArtist from "@/components/ArtistDetail/NextArtist";
import { motion } from "framer-motion";

function ArtistPage() {
  const router = useRouter();
  const { artistName } = router.query;

  const { push } = useRouter();

  // Get artist name in path
  const pathname = usePathname();
  // Gets the name of the artist that is being shown
  const artistSplit = pathname?.split("/")[2]?.split("%20")?.join(" ");

  // Gets artist data
  const [artistInfo, setArtistInfo] = useState<ArtistProps | undefined | null>(
    null
  );

  const [artist, setArtist] = useState(artistSplit);

  // The selected button of either Albums, EPs, or Singles
  const [activeSelect, setActiveSelect] = useState("Albums");

  // Spotify Embed states
  const [isSpotifyOpen, setIsSpotifyOpen] = useState<boolean>(false);
  // Gets the clicked image and spotify embed of the album, single, or ep selected
  const [spotifyEmbed, setSpotifyEmbed] = useState<string | null>(null);

  // The collection of Singles, EPs, or Albums based on the selection
  const [selectedCollectionArray, setSelectedCollectionArray] = useState<
    Collections[] | null | undefined
  >(null);

  useEffect(
    function () {
      // Finds where the artist name matches the artist from the data file
      setArtistInfo(
        allArtists.find((artist) => artist.artistName === artistName)
      );
    },
    [pathname, artistName]
  );

  function socialsIcon(social: string, href: string) {
    if (social.toLowerCase() === "spotify") {
      return (
        <SocialIcon
          network="spotify"
          target="_blank"
          url={href}
          fgColor="#FA9600"
          bgColor="transparent"
        />
      );
    } else if (social.toLowerCase() === "instagram") {
      return (
        <SocialIcon
          network="instagram"
          target="_blank"
          url={href}
          fgColor="#FA9600"
          bgColor="transparent"
        />
      );
    } else if (social.toLowerCase() === "tiktok") {
      return (
        <SocialIcon
          network="tiktok"
          target="_blank"
          url={href}
          fgColor="#FA9600"
          bgColor="transparent"
        />
      );
    }
  }

  // useEffect(
  //   function () {
  //     if (artist === artistName && artistInfo === undefined) {
  //       push('/not-found')
  //     }
  //   },
  //   [artistInfo]
  // );

  const appear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const navAppear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.8,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const titlesAppear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.8,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const socialsAppear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const arise = {
    initial: {
      y: 180,
    },
    animate: {
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  return (
    <>
      {artistInfo && (
        <section className="">
          <div className="flex md:flex-row flex-col-reverse">
            {/* SPOTIFY EMBED, NEXT/PREVIOUS, AND LIST OF ARTIST'S 
            EPS, SINGLES, AND ALBUMS */}
            <div className="flex-[1] md:mt-0 mt-6 flex flex-col">
              <div className="md:px-16 px-4">
                <SpotifyEmbed
                  isSpotifyOpen={isSpotifyOpen}
                  setIsSpotifyOpen={setIsSpotifyOpen}
                  spotifyEmbed={spotifyEmbed}
                  setSpotifyEmbed={setSpotifyEmbed}
                  artistInfo={artistInfo}
                />
              </div>
              <motion.div
                variants={appear}
                initial="initial"
                animate="animate"
                className="w-[90%] mx-auto"
              >
                <ArtistsWorks
                  activeSelect={activeSelect}
                  setActiveSelect={setActiveSelect}
                  selectedCollectionArray={selectedCollectionArray}
                  setSelectedCollectionArray={setSelectedCollectionArray}
                  artistInfo={artistInfo}
                  setSpotifyEmbed={setSpotifyEmbed}
                  setIsSpotifyOpen={setIsSpotifyOpen}
                />
              </motion.div>
              <motion.div
                variants={navAppear}
                initial="initial"
                animate="animate"
                className="md:mt-auto md:mb-0 mt-12 mb-4"
              >
                <NextArtist artistInfo={artistInfo} />
                <PreviousArtist artistInfo={artistInfo} />
              </motion.div>
            </div>

            {/* BACKGROUND IMAGE WITH ARTIST NAME AND SOCIALS */}
            <div className="relative md:sticky top-0 flex-[1] flex flex-col h-[88vh]">
              {/* ARTIST DESCRIPTION */}
              <motion.div
                variants={socialsAppear}
                initial="initial"
                animate="animate"
                className="mt-6 px-3 flex justify-end"
              >
                <p className="md:w-[30%] w-[40%] md:mb-0 mb-16 md:text-[16px] 2xl:text-[22px] text-[13px]">{artistInfo?.desc}</p>
              </motion.div>
              {/* NAME WITH SOCIALS */}
              <div className="mt-auto pb-[6vh] md:pb-[8vh] z-[5]">
                <div className="overflow-hidden">
                  <motion.h4
                    variants={arise}
                    initial="initial"
                    animate="animate"
                    className={`${satoshiMedium.className} tracking-tighter leading-[1] text-[10vw] text-center`}
                  >
                    {artistInfo?.artistName}
                  </motion.h4>
                </div>
                <div className="mt-2">
                  {/* ARTIST TITLES */}
                  <motion.div
                    variants={titlesAppear}
                    initial="initial"
                    animate="animate"
                    className="flex gap-3 justify-center items-center"
                  >
                    {artistInfo?.artistTitles?.map((title, i) => {
                      return (
                        <Fragment key={title}>
                          <p
                            className={`${satoshiMedium.className} md:text-[18px] 2xl:text-[26px] text-[16px] tracking-tighter uppercase`}
                          >
                            {title}
                          </p>
                          {i !== artistInfo.artistTitles.length - 1 && (
                            <SpinningStar size="10px" />
                          )}
                        </Fragment>
                      );
                    })}
                  </motion.div>
                </div>
                {/* ARTIST SOCIAL LINKS */}
                <motion.div
                  variants={socialsAppear}
                  initial="initial"
                  animate="animate"
                  className="flex items-center justify-center"
                >
                  {artistInfo?.socials?.map((social) => {
                    return (
                      <div key={social.social}>
                        {socialsIcon(social.social, social.link)}
                      </div>
                    );
                  })}
                </motion.div>
              </div>
              {/* ABSOLUTE BACKGROUND IMAGE WITH MUTED COVER */}
              <div
                className="z-[-1] absolute md:top-[-12vh] left-0 w-full h-full md:h-screen bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${artistInfo?.portraitImage})` }}
              >
                <Cover visible rounded={false}>
                  {""}
                </Cover>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ArtistPage;
