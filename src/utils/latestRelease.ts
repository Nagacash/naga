import { LatestReleaseProps } from "@/type/types"

// --- IMPORTANT: LatestReleaseProps Type Definition ---
// The 'LatestReleaseProps' type is imported from "@/type/types".
// If you are seeing an error like "cannot find LatestReleaseProps",
// you need to define this interface in your 'types.ts' file (e.g., at 'src/type/types.ts').
// Here is a suggested definition for LatestReleaseProps based on your data structure:

/*
// Suggested content for your 'src/type/types.ts' file:
export interface LatestReleaseProps {
    artistName: string;
    title: string;
    videoDirector: string;
    producer: string;
    manager: string;
    youtubeLink: string; // This holds the iframe HTML
    artistImage: string; // Path to the image
}
*/
// --- End of LatestReleaseProps Type Definition guidance ---

export const latestRelease: LatestReleaseProps = {
    artistName: "Naga",
    title: "Trailer",
    videoDirector: "Naga Apparel",
    producer: "ShortLord",
    manager: "Maurice Holda",
    youtubeLink: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Vwx4KpwpwVM?si=D8_7lFESfBd_cjcR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    // Landscape Image - Updated to a local path.
    // Make sure you place this image file in your public/images/artists/ directory!
    artistImage: "/public/images/hat1.jpg"
}