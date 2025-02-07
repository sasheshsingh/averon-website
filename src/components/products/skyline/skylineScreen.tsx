import React from "react";
import SkyLineHero from "./skylineHero";
import SkyLineTrailer from "./skylineTrailer";
import SkyLineFeatures from "./skylineFeatures";
import SkyLineShots from "./skylineShots";
import SkyLineHardwareInfo from "./skylineHardwareInfo";

const SkyLineScreen = () => {
  return (
    <div className="mx-auto w-full">
      <SkyLineHero />
      <SkyLineTrailer />
      <div className="max-w-screen-2xl mx-auto">
        <SkyLineFeatures />
        <SkyLineShots />
      </div>
      <SkyLineHardwareInfo />
    </div>
  );
};

export default SkyLineScreen;
