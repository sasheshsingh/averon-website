"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Link from "next/link";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { airpalWaitlistSectionButtonTitle, airpalWaitlistSectionFirstTextPart, airpalWaitlistSectionSecondTextPart, waitlistURL } from "@/data/content";

const AirPalWaitlist = () => {
  return (
    <BackgroundBeamsWithCollision>
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Center Content */}
      <div className="relative flex flex-col items-center justify-center text-center space-y-6">
        {/* Heading */}
        <h2 className="z-20 text-4xl font-bold text-white font-sans tracking-tight">
          {airpalWaitlistSectionFirstTextPart}
          <span className="ml-3 inline bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
            {airpalWaitlistSectionSecondTextPart}
          </span>
        </h2>

        {/* Button */}
        <Link href={waitlistURL}>
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
            <button className="px-5 py-2 backdrop-blur-sm border bg-indigo-300/10 border-indigo-500/20 text-white rounded-lg relative">
              <span>{airpalWaitlistSectionButtonTitle}</span>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-indigo-500 to-transparent" />
            </button>
          </motion.div>
        </Link>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default AirPalWaitlist;
