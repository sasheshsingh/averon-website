"use client";
import {
  skylinePageFeatureEightSubtitle,
  skylinePageFeatureEightTitle,
  skylinePageFeatureFiveSubtitle,
  skylinePageFeatureFiveTitle,
  skylinePageFeatureFourSubtitle,
  skylinePageFeatureFourTitle,
  skylinePageFeatureOneSubtitle,
  skylinePageFeatureOneTitle,
  skylinePageFeatureSectionTitle,
  skylinePageFeatureSevenSubtitle,
  skylinePageFeatureSevenTitle,
  skylinePageFeatureSixSubtitle,
  skylinePageFeatureSixTitle,
  skylinePageFeatureThreeSubtitle,
  skylinePageFeatureThreeTitle,
  skylinePageFeatureTwoSubtitle,
  skylinePageFeatureTwoTitle,
} from "@/data/content";
import { cn } from "../../../../lib/utils";
import {
  MousePointerClick,
  ScanEye,
  VenetianMask,
  Siren,
  ShieldCheck,
  Network,
  MapPinned,
  RadioTower,
} from "lucide-react";

const SkyLineFeatures = () => {
  const features = [
    {
      title: skylinePageFeatureOneTitle,
      description: skylinePageFeatureOneSubtitle,
      icon: <ScanEye />,
    },
    {
      title: skylinePageFeatureTwoTitle,
      description: skylinePageFeatureTwoSubtitle,
      icon: <MousePointerClick />,
    },
    {
      title: skylinePageFeatureThreeTitle,
      description: skylinePageFeatureThreeSubtitle,
      icon: <VenetianMask />,
    },
    {
      title: skylinePageFeatureFourTitle,
      description: skylinePageFeatureFourSubtitle,
      icon: <ShieldCheck />,
    },
    {
      title: skylinePageFeatureFiveTitle,
      description: skylinePageFeatureFiveSubtitle,
      icon: <Siren />,
    },
    {
      title: skylinePageFeatureSixTitle,
      description: skylinePageFeatureSixSubtitle,
      icon: <Network />,
    },
    {
      title: skylinePageFeatureSevenTitle,
      description: skylinePageFeatureSevenSubtitle,
      icon: <MapPinned />,
    },
    {
      title: skylinePageFeatureEightTitle,
      description: skylinePageFeatureEightSubtitle,
      icon: <RadioTower />,
    },
  ];

  return (
    <>
      <div className="text-3xl font-semibold mx-auto text-white text-center mt-16 mb-10">
        {skylinePageFeatureSectionTitle}
      </div>
      <div className="mb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </>
  );
};

export default SkyLineFeatures;

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-zinc-500",
        (index === 0 || index === 4) && "lg:border-l border-zinc-500",
        index < 4 && "lg:border-b border-zinc-500"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-zinc-900 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-indigo-300">{icon}</div>
      <div className="text-xl font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-zinc-500 group-hover/feature:bg-indigo-400 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm leading-6 text-zinc-400 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
