"use client";
import { HeroHighlight } from "../../ui/hero-highlight";
import React from "react";
import { Droplets, BatteryFull, ScanEye, Route, Leaf } from "lucide-react";
import {
  skylineHardwareInfoFiveSubtitle,
  skylineHardwareInfoFiveTitle,
  skylineHardwareInfoFourSubtitle,
  skylineHardwareInfoFourTitle,
  skylineHardwareInfoOneSubtitle,
  skylineHardwareInfoOneTitle,
  skylineHardwareInfoThreeSubtitle,
  skylineHardwareInfoThreeTitle,
  skylineHardwareInfoTwoSubtitle,
  skylineHardwareInfoTwoTitle,
} from "@/data/content";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const SkyLineHardwareInfo = () => {
  return (
    <HeroHighlight className="w-7/12 py-10 my-10">
      <BentoGrid className="mx-auto md:auto-rows-[17rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </HeroHighlight>
  );
};

export default SkyLineHardwareInfo;

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-white/[0.2] bg-zinc-950"></div>
);

const items = [
  {
    title: skylineHardwareInfoOneTitle,
    description: skylineHardwareInfoOneSubtitle,
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <ScanEye className="h-6 w-6 text-indigo-300" />,
  },
  {
    title: skylineHardwareInfoTwoTitle,
    description: skylineHardwareInfoTwoSubtitle,
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <BatteryFull className="h-6 w-6 text-indigo-300" />,
  },
  {
    title: skylineHardwareInfoThreeTitle,
    description: skylineHardwareInfoThreeSubtitle,
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <Droplets className="h-6 w-6 text-indigo-300" />,
  },
  {
    title: skylineHardwareInfoFourTitle,
    description: skylineHardwareInfoFourSubtitle,
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <Route className="h-6 w-6 text-indigo-300" />,
  },
  {
    title: skylineHardwareInfoFiveTitle,
    description: skylineHardwareInfoFiveSubtitle,
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <Leaf className="h-6 w-6 text-indigo-300" />,
  },
];
