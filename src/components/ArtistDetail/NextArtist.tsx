import React from "react";
import { ArtistProps } from "@/type/types";
import { allArtists } from "@/utils/artistData";
import Link from "next/link";
import { satoshiMedium } from "@/styles/fonts";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function NextArtist({
  artistInfo,
}: {
  artistInfo: ArtistProps | undefined | null;
}) {
  return (
    <>
      {artistInfo && allArtists?.length > 1 ? (
        <div className="flex justify-end items-center md:gap-5 gap-2">
          <Link
            className="group"
            href={`/artists/${
              allArtists[(artistInfo.id - 1 + 1) % allArtists.length].artistName
            }`}
          >
            <h5
              className={`${satoshiMedium.className} group-hover:translate-x-[-10px] duration-500 text-[8vw] uppercase tracking-tighter leading-[1]`}
            >
              {
                allArtists[(artistInfo.id - 1 + 1) % allArtists.length]
                  .artistName
              }
            </h5>
          </Link>
          <div>
            <ChevronRightIcon className="md:w-[4vw] w-6 text-text" strokeWidth={1.5} />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default NextArtist;
