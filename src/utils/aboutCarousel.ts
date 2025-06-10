// import { GalleryImagesProps, GalleryProps } from '@/type/types'

const strings = [
    'AFRO BEATS',
    'TRAP BEATS',
    'HIP HOP',
    'REGGAE',
    'AMAPIANO',
    'UNDERGROUND'
]

// DO NOT MODIFY

// Set up an array of the images above
const aboutText : string[] = []

strings.forEach((item) => {
    aboutText.push(item)
})

// A repeat of the gallery images array into another array 8 times
const allAboutText : string[]  = []

let n = 0;

while (n <= 7) {
    aboutText.forEach(item => {
        allAboutText.push(item)
    })

    n++
}

type About = {
    text: string;
    id: number;
}
// Full array with unique ids based on the index
export const repeatedAboutText : About[]  = []

allAboutText.forEach((item, index) => {
    repeatedAboutText.push({text: item, id: index + 1})
})

// DO NOT MODIFY