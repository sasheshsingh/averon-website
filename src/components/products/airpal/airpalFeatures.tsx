"use client";
import {
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
  ShoppingCart,
  PlayCircle,
  Search,
  Globe,
  Users,
  Server,
} from "lucide-react";

const AirPalFeatures = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-12 mb-24">
      <HoverEffect items={projects} />
    </div>
  );
};

export default AirPalFeatures;

export const projects = [
  {
    title: airpalPageFeaturesOneTitle,
    description: airpalPageFeaturesOneSubtitle,
    icon: ShoppingCart,
  },
  {
    title: airpalPageFeaturesTwoTitle,
    description: airpalPageFeaturesTwoSubtitle,
    icon: PlayCircle,
  },
  {
    title: airpalPageFeaturesThreeTitle,
    description: airpalPageFeaturesThreeSubtitle,
    icon: Search,
  },
  {
    title: airpalPageFeaturesFourTitle,
    description: airpalPageFeaturesFourSubtitle,
    icon: Globe,
  },
  {
    title: airpalPageFeaturesFiveTitle,
    description: airpalPageFeaturesFiveSubtitle,
    icon: Users,
  },
  {
    title: airpalPageFeaturesSixTitle,
    description: airpalPageFeaturesSixSubtitle,
    icon: Server,
  },
];
