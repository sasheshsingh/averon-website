"use client";
import React from "react";
import { BackgroundBeams } from "../../../components/ui/background-beams";
import { skylinePageHeroSubtitle, skylinePageHeroTitle } from "@/data/content";

const SkyLineHero = () => {
  return (
    <div className="mt-10 h-[40rem] w-full rounded-md bg-zinc-950 relative flex flex-col items-center justify-center antialiased">
      <p className="mb-3 relative z-10 text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-indigo-400 text-center font-sans font-bold">
        {skylinePageHeroTitle}
      </p>

      <p className="text-zinc-400 max-w-2xl mx-auto my-2 text-lg leading-8 text-center relative z-10">
        {skylinePageHeroSubtitle}
      </p>
      <BackgroundBeams />
    </div>
  );
};

export default SkyLineHero;
