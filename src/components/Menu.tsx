'use client'
import React from "react";
import { reverie, satoshiMedium } from "@/styles/fonts";
import { motion, easeIn } from "framer-motion";
import Link from "next/link";
import SpinningStar from "./SpinningStar";
import { usePathname } from "next/navigation";

type MenuProps = {
  readonly isMenuClicked: boolean;
  readonly setIsMenuClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

type NavProps = {
  setIsMenuClicked: React.Dispatch<React.SetStateAction<boolean>>;
  href: string;
  title: string
}

function Menu({ isMenuClicked, setIsMenuClicked }: MenuProps) {
  const pathname = usePathname()
  
  const navMenu = [
    {
      href: '/',
      title: 'home'
    },
    {
      href: '/#about',
      title: 'about'
    },
    {
      href: '/artists',
      title: 'artists'
    },
    {
      href: '/#gallery',
      title: 'gallery'
    },
    {
      href: '/contact',
      title: 'contact'
    },
  ]

  return (
    <motion.div
      initial={{ opacity: isMenuClicked ? 0 : 1 }}
      animate={{ opacity: isMenuClicked ? 1 : 0, transition: { duration: 0.4, ease: easeIn } }}
      className={`${
        isMenuClicked ? "visible" : "invisible"
      } duration-[.4s] md:hidden w-screen h-screen fixed top-0 left-0 z-[50] flex justify-center items-center bg-background`}
    >
      <ul className="px-10 w-full flex flex-col items-start xs:gap-0 gap-[.1rem]">
        {navMenu.map(nav => {
          return (
            <div key={nav.title} className="group w-full flex justify-between items-center gap-3 border-b-[1px] border-b-text py-2">
              <NavLink 
                setIsMenuClicked={setIsMenuClicked}
                href={nav.href}
                title={nav.title}
              />
              {pathname === nav.href && <SpinningStar size='8vw'/>}
            </div>
          )
        })}
      </ul>
    </motion.div>
  );
}

export default Menu;


function NavLink({setIsMenuClicked, href, title} : NavProps) {
  return (
    // xs:text-[4.5rem]
    <li className={`${satoshiMedium.className} group-hover:translate-x-[10px] duration-500 text-text sm:text-[8vw] text-[12vw] uppercase`}>
      <Link onClick={() => setIsMenuClicked(false)} href={href}>{title}</Link>
    </li>
  )
}