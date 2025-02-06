import React from "react";
import { Hero } from "./hero";
import Vision from "./vision";
import { GeneralFeatures } from "./generalFeatures";
import { SkyLinePreview } from "./skylinePreview";
import { AirPalPreview } from "./airpalPreview";

const HomeScreen = () => {
  return (
    <div className="mx-auto w-full">
      <Hero />
      <div className="max-w-screen-2xl mx-auto">
        <Vision />
      </div>
      <GeneralFeatures />
      <div className="max-w-screen-2xl mx-auto">
        <SkyLinePreview />
        <AirPalPreview />
      </div>
    </div>
  );
};

export default HomeScreen;
