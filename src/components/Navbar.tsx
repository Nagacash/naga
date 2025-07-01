"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "../../public/images/mulaLogo.png";
import Link from "next/link";
import Menu from "./Menu";
import { usePathname } from "next/navigation";
import TalkImage from "../../public/images/letsTalk.png";
import { reverie, satoshiRegular } from "@/styles/fonts";
import { motion} from "framer-motion";

function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hoveredText, setHoveredText] = useState("");

  const [currentTime, setCurrentTime] = useState("0:00:00 AM");

  const pathname = usePathname();

  function handleMenu() {
    setIsMenuClicked((prev) => !prev);
  }

  const navMenu = [
    {
      href: "/#about",
      title: "about",
    },
    {
      href: "/artists",
      title: "artists",
    },
    {
      href: "/#gallery",
      title: "gallery",
    },
    {
      href: "/contact",
      title: "contact",
    },
  ];

  // Renders the current time in client's location
  useEffect(function () {
    setInterval(function () {
      const date = new Date();

      let time = date.toLocaleTimeString("en-US", { timeZone: "Africa/Lagos" });

      setCurrentTime(time);
    }, 1000);
  }, []);

  const drop = {
    initial: {
      y: -200,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.4,
        delay: 0.5,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  return (
    <div className="relative">
      <motion.header
        variants={drop}
        initial="initial"
        animate="animate"
        className="sticky top-0 z-[90]"
      >
        <nav
          className={`md:px-[6rem] px-[30px] flex ${
            isMenuClicked ? "justify-end py-[50px]" : "justify-between py-5"
          } items-center py-5`}
        >
          <div
            className={`${
              isMenuClicked ? "hidden" : "block"
            } duration-[.4s] flex items-center md:gap-9 gap-4`}
          >
            {/* HOME ORACLE LOGO */}
            <div>
              <Link href={"/"}>
                <Image
                  src={logo}
                  alt="white oracle music of t.h.u.g.s. music logo"
                  width={60}
                  priority
                />
              </Link>
            </div>
            {/* TIME OF LOCATION */}
            <div className="flex items-center gap-3">
              <div>
                <p className="text-[12px] 2xl:text-[18px] uppercase">
                  Hamburg, DE
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="animate-ping text-[13px] 2xl:text-[18px] mb-[5px] text-accent">
                  &#x2025;
                </p>
                <p className="text-[12px] 2xl:text-[18px]">{currentTime}</p>
              </div>
            </div>
          </div>
          {/* NAVIGATION LINKS */}
          <div className="flex items-center gap-[4rem]">
            <ul
              // ASSIGNS TRUE OR FALSE IF THE DIV IS HOVERED OVER
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="md:flex items-center gap-8 hidden"
            >
              {navMenu.map((nav) => {
                return (
                  // ADDS BLUR EFFECT IF LIST ELEMENTS ARE NOT HOVERED OVER
                  // ONLY IF MOUSE IS WITHIN RANGE OF THE UNORDERED LIST DIV
                  <li
                    key={nav.title}
                    onMouseEnter={() => setHoveredText(nav.title)}
                    onMouseLeave={() => setHoveredText("")}
                    className={`text-[14px] 2xl:text-[18px]
                        ${
                          pathname === nav.href && !isHovered
                            ? "text-white"
                            : "text-text"
                        }

                        ${
                          hoveredText === nav.title && isHovered
                            ? "text-white"
                            : isHovered
                            ? "blur-[1.5px] text-text"
                            : "text-text"
                        }
                        duration-[.3s]`}
                  >
                    <Link href={nav.href}>{nav.title}</Link>
                  </li>
                );
              })}
            </ul>
            {/* SPINNING ANIMATION IMAGE */}
            <div className="relative md:flex hidden items-center justify-center">
              <div className="absolute z-[-1] animate-spin-smooth w-[6vw]">
                <Image
                  src={TalkImage}
                  alt="spinning radial text"
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full"
                />
              </div>
              <h4 className={`${reverie.className} text-accent text-[3vw]`}>
                o
              </h4>
            </div>
          </div>
          <div
            onClick={handleMenu}
            className="md:hidden flex flex-col gap-[5px] cursor-pointer z-[90]"
          >
            <MenuBars isMenuClicked={isMenuClicked} />
          </div>
        </nav>
      </motion.header>
      <Menu isMenuClicked={isMenuClicked} setIsMenuClicked={setIsMenuClicked} />
    </div>
  );
}

export default Navbar;

function MenuBars({ isMenuClicked }: { readonly isMenuClicked: boolean }) {
  return (
    <>
      <div
        className={`${
          isMenuClicked ? "rotate-[35deg] translate-y-[7px]" : "rotate-0"
        } duration-[.4s] transform h-[2px] w-[4.5rem] bg-text`}
      ></div>
      <div
        className={`${
          isMenuClicked ? "opacity-0" : "opacity-1"
        } duration-[.4s] h-[2px] w-[4.5rem] bg-text`}
      ></div>
      <div
        className={`${
          isMenuClicked ? "rotate-[-35deg] translate-y-[-7px]" : "rotate-0"
        } duration-[.4s] transform h-[2px] w-[4.5rem] bg-text`}
      ></div>
    </>
  );
}
