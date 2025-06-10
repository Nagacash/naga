import React from "react";
import { ArtistProps } from "@/type/types";
import { allArtists } from "@/utils/artistData";
import Link from "next/link";
import { satoshiMedium } from "@/styles/fonts";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

function PreviousArtists({
  artistInfo,
}: {
  artistInfo: ArtistProps | undefined | null;
}) {
  return (
    <>
      {artistInfo && allArtists?.length > 2 ? (
        <div className="flex items-center md:gap-5 gap-2">
          <div>
            <ChevronLeftIcon className="md:w-[4vw] w-6 text-text" strokeWidth={1.5} />
          </div>
          <Link
            className="group"
            href={`/artists/${
              allArtists[
                (allArtists.length + artistInfo.id - 1 - 1) % allArtists.length
              ].artistName
            }`}
          >
            <h5
              className={`${satoshiMedium.className} group-hover:translate-x-[10px] duration-500 text-[8vw] uppercase tracking-tighter leading-[1]`}
            >
              {
                allArtists[
                  (allArtists.length + artistInfo.id - 1 - 1) %
                    allArtists.length
                ].artistName
              }
            </h5>
          </Link>
        </div>
      ) : null}
    </>
  );
}

export default PreviousArtists;
