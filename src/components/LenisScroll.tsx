"use client"

import React, { ReactNode, useEffect } from 'react'
import { ReactLenis} from '@studio-freight/react-lenis'

function LenisScroll({ children }: { children: React.ReactNode}) {
  // const lenis = useLenis(({ scroll }) => {
  //   // called every scroll
  // })

  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}

export default LenisScroll