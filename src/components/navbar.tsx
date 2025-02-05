"use client";

import Link from "next/link";
import React from "react";
import AveronLogo from "../assets/Averon.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
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
  contactLink,
} from "@/data/content";

const Navbar = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="bg-background w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center border-b-[0.2px] border-b-main border-opacity-20 justify-between  mx-auto py-2 px-16">
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
            <motion.button
              type="button"
              className="relative overflow-hidden text-white font-medium rounded-lg text-sm px-4 py-2 text-center"
              animate={{
                backgroundImage: [
                  "linear-gradient(to right, #4646FF, #A8A8FF, #000000)",
                  "linear-gradient(to right, #000000, #A8A8FF, #4646FF)",
                  "linear-gradient(to right, #4646FF, #A8A8FF, #000000)",
                ],
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              style={{ backgroundSize: "200% 200%" }}
              whileTap={{
                scale: 0.95,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              whileHover={{
                scale: 1.0,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
            >
              Join Waitlist
            </motion.button>
          </a>
        </div>

        {/* Navbar Menu Items */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-background">
            {/* Home */}
            <li>
              <Link
                href={homeLink}
                className="block py-2 px-3 font-light text-primary bg-transparent md:p-0"
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
              <div className="cursor-pointer font-light block py-2 px-3 text-primary rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                {productsNavbar}
              </div>

              {/* Wrap dropdown in AnimatePresence to handle exit animations */}
              <AnimatePresence>
                {hover && (
                  <motion.div
                    className="absolute left-0 w-48 bg-background shadow-md rounded-lg mt-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }} // Ensure smooth fade-out
                    transition={{
                      opacity: { duration: 0.3 },
                      y: { type: "spring", stiffness: 100, damping: 15 },
                    }}
                    style={{ zIndex: 10 }}
                  >
                    <ul className="p-2 border-edges border-opacity-30 border rounded-lg">
                      <Link href={skylineLink}>
                        <li className="py-2 px-4 font-light text-primary hover:bg-main">
                          {skylineNavbar}
                        </li>
                      </Link>

                      {/* Custom Divider */}
                      <div className="my-2 border-t-[2px] border-opacity-40 border-edges" />

                      <Link href={airpalLink}>
                        <li className="py-2 px-4 font-light text-primary hover:bg-main">
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
                className="block py-2 px-3 font-light text-primary md:p-0"
              >
                {teamNavbar}
              </Link>
            </li>

            {/* Contact */}
            <li>
              <Link
                href={contactLink}
                className="block py-2 px-3 font-light text-primary md:p-0"
              >
                {contactNavbar}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
