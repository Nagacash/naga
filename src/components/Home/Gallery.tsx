import React from 'react'
import Image from 'next/image'
import { repeatedGalleryImages } from '@/utils/gallery'
import Cover from '../Cover'
import InstagramIcon from '../../../public/socials/icons8-website-50.png'

function Gallery() {  
  return (
    <section className='relative mt-[8rem] mb-[4rem] group'>
      <a href='https://eu.jotform.com/agent/01974f267d1373be9de5b9d9d665c3497851' target='_blank'>
        <Cover visible={false} rounded={false}>
            <Image
              src={InstagramIcon}
              alt='instagram logo'
              placeholder='blur'
              className='w-7 z-[8] ease-in-out'
              />
        </Cover>
      </a>
      <div className='overflow-x-hidden'>
        <div className='relative gallery_carousel'>
          <div className='flex gap-2 w-fit'>
            {repeatedGalleryImages.map(img => {
              return (
                <div key={img.id} className='w-[20vw] max-h-[45vh] object-cover'>
                  <Image
                    src={img.image}
                    alt={`oracle gallery image ${img.id}`}
                    placeholder='blur'
                    className='w-full h-full'
                    />
                </div>
              )
            })}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Gallery