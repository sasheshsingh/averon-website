import React from "react";
import { Hero } from "./hero";
import Vision from "./vision";
import { GeneralFeatures } from "./generalFeatures";
import { SkyLinePreview } from "./skylinePreview";

const HomeScreen = () => {
  return (
    <div className="max-w-screen-2xl mx-auto w-full">
      <Hero />
      <Vision />
      <GeneralFeatures />
      <SkyLinePreview />
    </div>
  );
};

export default HomeScreen;
