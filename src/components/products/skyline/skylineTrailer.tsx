
"use client";
import React from "react";
import { BackgroundGradient } from "../../ui/background-gradient";

const SkyLineTrailer = () => {
  return (
    <div className="h-[50rem] w-full bg-zinc-950 bg-grid-white/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="mt-20 mb-24">
        <BackgroundGradient className="rounded-[22px] p-0.5 bg-zinc-950">
          <video
            className="relative w-full h-[40rem] shadow-xl rounded-[22px] mx-auto object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="../../../assets"
              // src="../../../assets/SkyLine_trailer.mp4"
              type="video/mp4"
            />
          </video>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default SkyLineTrailer;
