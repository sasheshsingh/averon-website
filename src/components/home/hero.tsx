"use client";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import React from "react";
import { FlipWords } from "../ui/flip-words";
import {
  heroSubtitleAnimatingWords,
  heroSubtitleEnd,
  heroSubtitleStart,
  heroTitle,
} from "@/data/content";

export const Hero = () => {
  const words = heroSubtitleAnimatingWords;
  return (
    <>
      <div className="mt-10 h-[50rem] w-full bg-zinc-950 bg-dot-white/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        {/* Container for both sections */}
        <div className="relative -mt-36 z-20 bg-clip-text text-transparent flex flex-col items-center justify-center">
          {/* Hero title */}
          <div className="h-[20rem] -mb-16 flex items-center justify-center">
            <TextHoverEffect text={heroTitle} />
          </div>

          {/* Hero subtitle */}
          <div className="flex justify-center items-center px-4">
            <div className="text-4xl mx-auto font-normal text-white dark:text-neutral-400">
              {heroSubtitleStart}
              <FlipWords words={words} />
              {heroSubtitleEnd}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
