import React from "react";
import SkyLineHero from "./skylineHero";
import SkyLineTrailer from "./skylineTrailer";

const SkyLineScreen = () => {
  return (
    <div className="mx-auto w-full">
      <SkyLineHero />
      <SkyLineTrailer />
      <div className="max-w-screen-2xl mx-auto"></div>
    </div>
  );
};

export default SkyLineScreen;
