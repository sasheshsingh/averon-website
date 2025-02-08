import React from "react";
import AirPalHero from "./airpalHero";
import AirPalTrailer from "./airpalTrailer";
import AirPalShots from "./airpalShots";
import AirPalFeatures from "./airpalFeatures";

const AirPalScreen = () => {
  return (
    <div className="mx-auto w-full">
      <AirPalHero />
      <AirPalTrailer />
      <div className='className="max-w-screen-2xl mx-auto"'>
        <AirPalShots />
      </div>
      <AirPalFeatures />
    </div>
  );
};

export default AirPalScreen;
