"use client";
import acmeLogo from "@/assets/logo-acme.png";
import googleLogo from "@/assets/google.png";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const logoList = [
  { name: "Google", image: googleLogo },
  { name: "Google", image: googleLogo },
  { name: "Google", image: googleLogo },
  { name: "Google", image: googleLogo },
  { name: "Google", image: googleLogo },
  { name: "Google", image: googleLogo },
  { name: "Google", image: googleLogo },
  { name: "Google", image: googleLogo },
];
export const LogoTicker = () => {
  return (
    <section className="w-screen py-36 mb-36">
      <div className="container overflow-x-clip">
        <div>
          <h1 className="text-center text-white/50 text-7xl py-24">
            {" "}
            Our Trusted Partners
          </h1>
        </div>
        <div className="overflow-hidden mt-12 gradient-mask-r-[transparent,rgba(0,0,0,1.0)_40%,rgba(0,0,0,0.1)_100%]">
          <motion.div
            animate={{ x: "-50%" }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-24 pr-24 flex-none"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <React.Fragment key={i}>
                {logoList.map((logo) => (
                  <Image
                    src={logo.image}
                    key={logo.name}
                    alt={logo.name}
                    width={200}
                    height={100}
                  />
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export const LogoTickerList = () => {
  return (
    <section className="py-56 ">
      <div className="container text-center">
        {/* Heading */}
        <div className="container">
          <h1 className="text-6xl font-semibold mb-8">Our Trusted Partners</h1>
        </div>

        {/* Logos */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_right, transparent, black_20%, black_80%, transparent)] pt-36">
          <div className="flex gap-14 animate-scroll">
            {[googleLogo, googleLogo, googleLogo, googleLogo, googleLogo].map(
              (logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={`Partner Logo ${index + 1}`}
                  className="h-16 w-auto"
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
