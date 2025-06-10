import React from 'react'
import { MusicalNoteIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Collections, ArtistProps } from '@/type/types';
import parse from 'html-react-parser';

type Spotify = {
  isSpotifyOpen: boolean; 
  setIsSpotifyOpen: React.Dispatch<React.SetStateAction<boolean>>; 
  spotifyEmbed: string | null;
  setSpotifyEmbed: React.Dispatch<React.SetStateAction<string | null>>;
  artistInfo: ArtistProps | null | undefined
}

function SpotifyEmbed({ isSpotifyOpen, setIsSpotifyOpen, spotifyEmbed, setSpotifyEmbed }: Spotify) {
  return (
    <div className={`flex gap-5 md:gap-10 ${isSpotifyOpen ? 'mb-10' : 'mb-0'}`}>
      <div className='z-[10]'>
        {isSpotifyOpen ? 
        <button onClick={() => {setIsSpotifyOpen(false)}} className='md:w-[40px] md:h-[40px] w-[25px] h-[25px] rounded-full bg-white flex justify-center items-center'>
          <XMarkIcon color='#FA9600' className='md:w-6 md:h-6 w-3 duration-[.4s]' />
        </button>
        :
        // <button onClick={() => {setIsSpotifyOpen(true)}} className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center'>
        //   <MusicalNoteIcon color='#FA9600' className='w-6 h-6 duration-[.4s]' />
        // </button>
        null
        }
      </div>
      <div className='w-[80%]'>
        {spotifyEmbed && isSpotifyOpen &&
          <div>
            {parse(spotifyEmbed)}
          </div> 
        }
      </div>
    </div>
  )
}

export default SpotifyEmbed