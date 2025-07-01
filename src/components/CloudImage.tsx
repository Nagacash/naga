'use client'

import React from 'react';
// Import the built-in Image component from Next.js
import Image from 'next/image';

// The props remain similar, as the Image component also uses src, width, height, alt
function LocalImage({ image, width, height, alt, className }: { image: string, width: number, height: number, alt: string, className?: string }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Image
          src={image} // This now expects a path to your local image (e.g., '/images/artists/wavy-hours.png')
          alt={alt}
          className={className}
          priority={true}
          quality={75}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: 'cover',
          }}
      />
    </div>
  )
}

// Renamed the component to reflect its new purpose (LocalImage or AppImage, etc.)
export default LocalImage;
