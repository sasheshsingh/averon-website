"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import AirPalOne from "../../assets/AirPal_one.jpg";
import AirPalTwo from "../../assets/AirPal_two.png";
import AirPalThree from "../../assets/AirPal_three.png";
import {
  airpalExploreButton,
  airpalLink,
  airpalPreviewTitle,
  airpalWaitlistButton,
  waitlistURL,
} from "@/data/content";
import Link from "next/link";

export function AirPalPreview() {
  const images = [AirPalOne.src, AirPalThree.src, AirPalTwo.src];

  return (
    <ImagesSlider className="rounded-2xl my-10 h-[55rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="-mt-[400px] font-bold text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-indigo-100 to-zinc-300 py-4">
          {airpalPreviewTitle}
        </motion.p>

        <div className="flex flex-row">
          {/* Waitlist button */}
          <a href={waitlistURL}>
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
              <button className="px-4 py-2 backdrop-blur-sm border bg-blue-300/10 border-blue-500/20 text-white mx-auto text-center rounded-lg relative mt-4">
                <span>{airpalWaitlistButton}</span>
                <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-500 to-transparent" />
              </button>
            </motion.div>
          </a>

          {/* Explore button */}
          <Link href={airpalLink}>
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
              <button className="px-4 py-2 backdrop-blur-sm border bg-indigo-300/10 border-indigo-500/20 text-white mx-auto text-center rounded-lg relative mt-4">
                <span>{airpalExploreButton}</span>
                <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-indigo-500 to-transparent" />
              </button>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
