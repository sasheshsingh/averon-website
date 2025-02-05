"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// Logo data
const logoList = [
  { name: "Google", image: "" },
  { name: "Google", image: "" },
  { name: "Google", image: "" },
  { name: "Google", image: "" },
  { name: "Google", image: "" },
  { name: "Google", image: "" },
];

// Reusable Logo Ticker Component
const LogoMarquee = ({ logos, speed = 25 }: { logos: typeof logoList; speed?: number }) => {
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
      <motion.div
        animate={{ x: "-50%" }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex gap-24 pr-24"
      >
        {Array.from({ length: 2 }).map((_, i) => (
          <React.Fragment key={i}>
            {logos.map((logo, index) => (
              <Image
                key={`${logo.name}-${index}`}
                src={logo.image}
                alt={logo.name}
                width={200}
                height={100}
                className="h-16 w-auto"
              />
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

// Main LogoTicker Component
export const LogoTicker = () => {
  return (
    <section className="w-screen py-36 mb-36">
      <div className="container overflow-x-clip">
        <h1 className="text-center text-white/50 text-7xl py-24">Our Trusted Partners</h1>
        <LogoMarquee logos={logoList} speed={25} />
      </div>
    </section>
  );
};

// Alternative LogoTickerList Component
export const LogoTickerList = () => {
  return (
    <section className="py-56">
      <div className="container text-center">
        <h1 className="text-6xl font-semibold mb-8">Our Trusted Partners</h1>
        <LogoMarquee logos={logoList} speed={20} />
      </div>
    </section>
  );
};