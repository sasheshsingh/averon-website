"use client";
import React from "react";
import { Vortex } from "../../ui/vortex";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const AirPalTrailer = () => {
  return (
    <div className="h-[50rem] w-full bg-zinc-950 relative flex items-center justify-center">
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
                  src="../../assets"
                //   src="../../assets/AirPal_trailer.mp4"
                  type="video/mp4"
                />
              </video>
            </BackgroundGradient>
          </div>
        </div>
  );
};

export default AirPalTrailer;
