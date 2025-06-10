import Gallery1 from '../../public/gallery/mulla17.jpg'
import Gallery2 from '../../public/gallery/mulla19.jpg'
import Gallery3 from '../../public/gallery/mulla20.jpg'
import Gallery4 from '../../public/gallery/mulla21.jpg'
import Gallery5 from '../../public/gallery/mulla16.jpg'

import { GalleryImagesProps, GalleryProps } from '@/type/types'

const images = [
    {
      image: Gallery1,
    },
    {
      image: Gallery2,
    },
    {
      image: Gallery3,
    },
    {
      image: Gallery4,
    },
    {
      image: Gallery5,
    }
]

// DO NOT MODIFY

// Set up an array of the images above
const galleryImages : GalleryProps[] = []

images.forEach((item) => {
    galleryImages.push(item)
})

// A repeat of the gallery images array into another array 8 times
const allGalleryImages : GalleryProps[]  = []

let n = 0;

while (n <= 7) {
    galleryImages.forEach(item => {
        allGalleryImages.push(item)
    })

    n++
}

// Full array with unique ids based on the index
export const repeatedGalleryImages : GalleryImagesProps[]  = []

allGalleryImages.forEach((item, index) => {
    repeatedGalleryImages.push({... item, id: index + 1})
})

// DO NOT MODIFY