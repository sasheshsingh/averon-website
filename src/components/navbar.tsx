"use client";

import Link from "next/link";
import React from "react";
import AveronLogo from "../../public/assets/Averon.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import {
  waitlistURL,
  homeNavbar,
  productsNavbar,
  teamNavbar,
  contactNavbar,
  skylineNavbar,
  airpalNavbar,
  homeLink,
  skylineLink,
  airpalLink,
  teamLink,
  joinWaitlist,
} from "@/data/content";

const Navbar = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="bg-zinc-950 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center border-b-[0.2px] border-b-indigo-400 border-opacity-10 justify-between mx-auto py-2 px-16">
        {/* Averon Logo */}
        <Link
          href={homeLink}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <AveronLogo />
        </Link>

        {/* Waitlist Button */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a target="_blank" href={waitlistURL}>
            <motion.div
              className="relative overflow-hidden text-white font-medium rounded-lg text-sm px-4 py-2 text-center"
              style={{ backgroundSize: "200% 200%" }}
              whileTap={{
                scale: 0.85,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              whileHover={{
                scale: 1.0,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
            >
              <HoverBorderGradient
                containerClassName="rounded-lg"
                as="button"
                className="bg-zinc-950 text-white flex items-center space-x-2"
                duration={0.4} 
              >
                <span>{joinWaitlist}</span>
              </HoverBorderGradient>
            </motion.div>
          </a>
        </div>

        {/* Navbar Menu Items */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-zinc-950">
            {/* Home */}
            <li>
              <Link
                href={homeLink}
                className="block py-2 px-3 font-medium text-white hover:text-zinc-400 hover:duration-150 md:p-0"
                aria-current="page"
              >
                {homeNavbar}
              </Link>
            </li>

            {/* Products */}
            <li
              className="relative"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div className="cursor-pointer font-medium py-2 px-3 text-white rounded-sm hover:text-zinc-400 hover:duration-150 md:p-0 flex items-center">
                {productsNavbar}
                <ChevronDown className="w-4 h-4 text-white ml-1 mt-1" />
              </div>

              {/* Wrap dropdown in AnimatePresence to handle exit animations */}
              <AnimatePresence>
                {hover && (
                  <motion.div
                    className="absolute left-0 w-48 bg-zinc-950 shadow-md rounded-lg mt-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      opacity: { duration: 0.3 },
                      y: { type: "spring", stiffness: 100, damping: 15 },
                    }}
                    style={{ zIndex: 10 }}
                  >
                    <ul className="p-2 border-zinc-500 border-opacity-30 border rounded-lg">
                      <Link href={skylineLink}>
                        <li className="py-2 px-4 font-medium text-white hover:bg-indigo-400 rounded-lg">
                          {skylineNavbar}
                        </li>
                      </Link>

                      {/* Custom Divider */}
                      <div className="my-2 border-t-[2px] border-opacity-40 border-zinc-500" />

                      <Link href={airpalLink}>
                        <li className="py-2 px-4 font-medium text-white hover:bg-indigo-400 rounded-lg">
                          {airpalNavbar}
                        </li>
                      </Link>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Team */}
            <li>
              <Link
                href={teamLink}
                className="block py-2 px-3 font-medium text-white hover:text-zinc-400 hover:duration-150 md:p-0"
              >
                {teamNavbar}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
