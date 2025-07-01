// This file should be located at '@/utils/artistData' as per your import.

// Assume these image files are placed in your public folder, e.g., /public/images/artists/
// You will need to download and place your images here.
// Example paths:
// /public/images/artists/wavy_hours.png
// /public/images/artists/already_know.png
// /public/images/artists/night_show.png
// /public/images/artists/juug_slide.png
// /public/images/artists/victor_osimhen.png
// /public/images/artists/mula1_landscape.jpg
// /public/images/artists/mula1_portrait.jpg

// --- IMPORTANT: ArtistProps Type Definition ---
// The 'ArtistProps' type is imported from "../type/types".
// If you are seeing an error like "cannot find ArtistProps",
// you need to define this interface in your 'types.ts' file (e.g., at '../type/types.ts').
// Here is a suggested definition for ArtistProps based on your data structure:

/*
// Suggested content for your '../type/types.ts' file:
export interface Collections {
    name: string;
    image: string;
    spotifyEmbedded: string;
}

export interface Social {
    social: string;
    link: string;
}

export interface ArtistProps {
    artistName: string;
    desc: string;
    artistTitles: string[];
    socials: Social[];
    albums: Collections[];
    eps: Collections[];
    singles: Collections[];
    landscapeImage: string;
    portraitImage: string;
    id?: number; // 'id' is added later in allArtists.push
}
*/
// --- End of ArtistProps Type Definition guidance ---


import { ArtistProps } from "../type/types"

// CAN BE MODIFIED
const artists = [
    {
        artistName: "Previous Bookings",
        desc: 'Naga Jam ',
        artistTitles: ['Concerts', 'Naga Club'],
        socials: [
            {
                social: 'spotify',
                link: 'https://youtube.com/playlist?list=PLUxV3yyMKQ5g2X8tw9ExDOvQ_Icny1MxW&si=LFOnXW0ZbSgZ6Nwn'
            },
            {
                social: 'instagram',
                link: 'https://www.instagram.com/naga_apparel/'
            },
        ],
        albums: [
            
        ],
        eps: [
            {
                name: 'Wavy Hours',
                // Updated local path
                image: '/images/mula9.jpg', 
                spotifyEmbedded: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6bjZXKglH0yJUplNS7Er8p?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
            }
        ],
        singles: [
            {
                name: 'Already Know',
                // Updated local path
                image: '/images/mula9.jpg', 
                spotifyEmbedded: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2zdE0rw1JbzWxNbGLOUNyo?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
            },
            {
                name: 'Night Show',
                // Updated local path
                image: '/images/mula9.jpg', 
                spotifyEmbedded: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2zdE0rw1JbzWxNbGLOUNyo?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
            },
            {
                name: 'Juug and Slide',
                // Updated local path
                image: '/images/mula9.jpg', 
                spotifyEmbedded: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6bjZXKglH0yJUplNS7Er8p?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
            },
            {
                name: 'Victor Osimhen (Remix)',
                // Updated local path
                image: '/images/mula9.jpg', 
                spotifyEmbedded: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6bjZXKglH0yJUplNS7Er8p?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
            },
        ],
        // Updated local paths for landscape and portrait images
        landscapeImage: '/gallery/mulla18.jpg', 
        portraitImage: '/gallery/mulla19.jpg' 
    },
    // {
    //     artistName: "George",
    //     desc: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula.',
    //     artistTitles: ['rapper', 'producer'],
    //     socials: [
    //         {
    //             social: 'spotify',
    //             link: 'https://instagram.com/'
    //         },
    //         {
    //             social: 'instagram',
    //             link: 'https://instagram.com/'
    //         },
    //     ],
    //     albums: [
    //         {
    //             name: 'string',
    //             image: '/images/artists/george_album.jpg', // Example local path
    //             spotifyEmbedded: 'albums'
    //         }
    //     ],
    //     eps: [
    //         {
    //             name: 'string',
    //             image: '/images/artists/george_ep.jpg', // Example local path
    //             spotifyEmbedded: 'eps'
    //         }
    //     ],
    //     singles: [
    //         {
    //             name: 'string',
    //             image: '/images/artists/george_single.jpg', // Example local path
    //             spotifyEmbedded: 'singles'
    //         }
    //     ],
    //     landscapeImage: '/images/artists/george_landscape.jpg', // Example local path
    //     portraitImage: '/images/artists/george_portrait.jpg' // Example local path
    // },
    // {
    //     artistName: "Master W.",
    //     desc: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula.',
    //     artistTitles: ['rapper', 'producer'],
    //     socials: [
    //         {
    //             social: 'spotify',
    //             link: 'https://instagram.com/'
    //         },
    //         {
    //             social: 'instagram',
    //             link: 'https://instagram.com/'
    //         },
    //     ],
    //     albums: [
    //         {
    //             name: 'string',
    //             image: '/images/artists/masterw_album.jpg', // Example local path
    //             spotifyEmbedded: 'albums'
    //         }
    //     ],
    //     eps: [
    //         {
    //             name: 'string',
    //             image: '/images/artists/masterw_ep.jpg', // Example local path
    //             spotifyEmbedded: 'eps'
    //         }
    //     ],
    //     singles: [
    //         {
    //             name: 'string',
    //             image: '/images/artists/masterw_single.jpg', // Example local path
    //             spotifyEmbedded: 'singles'
    //         }
    //     ],
    //     landscapeImage: '/images/artists/masterw_landscape.jpg', // Example local path
    //     portraitImage: '/images/artists/masterw_portrait.jpg' // Example local path
    // },
]


// DO NOT MODIFY
export const allArtists : ArtistProps[] = []

artists.forEach((item, index) => {
    allArtists.push({... item, id: index + 1})
})

// DO NOT MODIFY
