import React from "react";
import { reverie } from "@/styles/fonts";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SpinningStar from "@/components/SpinningStar";

function NotFound() {
  return (
    <div className="bg-background flex justify-center items-center">
      <div className="">
        <h1
          className={`${reverie.className} text-[30vw] text-center leading-[1] mb-[-.2em]`}
        >
          404
        </h1>
        <div className="flex items-center justify-center gap-3">
          <SpinningStar size="16px" />
          <p className="capitalize text-[22px] tracking-tighter">
            Page not found
          </p>
          <SpinningStar size="16px" />
        </div>
        <Link href='/'>
          <div className="flex justify-center items-center mt-6 mb-8">
            <button
              className={`group hover:text-background hover:bg-accent duration-[.4s] flex justify-between items-center gap-10 px-5 md:px-8 py-1 border-[1.5px] border-accent rounded-full uppercase text-[16px] md:text-[22px] text-white`}
            >
              <>
                Back to Home
                <ArrowRightIcon className="w-6 text-white transform duration-[.4s] group-hover:text-background group-hover:translate-x-[10px]" />
              </>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
