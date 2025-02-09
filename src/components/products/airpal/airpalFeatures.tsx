"use client";
import {
  airpalFeaturesSectionTitle,
  airpalPageFeaturesFiveSubtitle,
  airpalPageFeaturesFiveTitle,
  airpalPageFeaturesFourSubtitle,
  airpalPageFeaturesFourTitle,
  airpalPageFeaturesOneSubtitle,
  airpalPageFeaturesOneTitle,
  airpalPageFeaturesSixSubtitle,
  airpalPageFeaturesSixTitle,
  airpalPageFeaturesThreeSubtitle,
  airpalPageFeaturesThreeTitle,
  airpalPageFeaturesTwoSubtitle,
  airpalPageFeaturesTwoTitle,
} from "@/data/content";
import { HoverEffect } from "../../ui/card-hover-effect";
import {
  Siren,
  BellElectric,
  Cctv,
  Radar,
  Cloud,
  AudioLines,
} from "lucide-react";

const AirPalFeatures = () => {
  return (
    <>
      <div className="text-3xl font-semibold mx-auto text-white text-center mt-20 mb-10">
        {airpalFeaturesSectionTitle}
      </div>
      <div className="max-w-5xl mx-auto px-8 mb-10">
        <HoverEffect items={projects} />
      </div>
    </>
  );
};

export default AirPalFeatures;

export const projects = [
  {
    title: airpalPageFeaturesOneTitle,
    description: airpalPageFeaturesOneSubtitle,
    icon: Cctv,
  },
  {
    title: airpalPageFeaturesTwoTitle,
    description: airpalPageFeaturesTwoSubtitle,
    icon: Siren,
  },
  {
    title: airpalPageFeaturesThreeTitle,
    description: airpalPageFeaturesThreeSubtitle,
    icon: BellElectric,
  },
  {
    title: airpalPageFeaturesFourTitle,
    description: airpalPageFeaturesFourSubtitle,
    icon: Radar,
  },
  {
    title: airpalPageFeaturesFiveTitle,
    description: airpalPageFeaturesFiveSubtitle,
    icon: Cloud,
  },
  {
    title: airpalPageFeaturesSixTitle,
    description: airpalPageFeaturesSixSubtitle,
    icon: AudioLines,
  },
];
