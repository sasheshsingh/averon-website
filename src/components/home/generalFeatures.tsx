"use client";
import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  Award,
  Box,
  BrainCircuit,
  CodeXml,
  Leaf,
  Lock,
  Repeat,
  ScanEye,
  Search,
  Settings,
  Siren,
  Sparkles,
} from "lucide-react";
import {
  uniqueFeatures,
  uniqueFeaturesCardFiveSubtitle,
  uniqueFeaturesCardFiveTitle,
  uniqueFeaturesCardFourSubtitle,
  uniqueFeaturesCardFourTitle,
  uniqueFeaturesCardOneSubtitle,
  uniqueFeaturesCardOneTitle,
  uniqueFeaturesCardThreeSubtitle,
  uniqueFeaturesCardThreeTitle,
  uniqueFeaturesCardTwoSubtitle,
  uniqueFeaturesCardTwoTitle,
} from "@/data/content";

// Hardcoded data for the grid items
const gridItemsData = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <BrainCircuit className="h-4 w-4 text-zinc-300" />,
    title: uniqueFeaturesCardOneTitle,
    description: uniqueFeaturesCardOneSubtitle,
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <Siren className="h-4 w-4 text-zinc-300" />,
    title: uniqueFeaturesCardTwoTitle,
    description: uniqueFeaturesCardTwoSubtitle,
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <Repeat className="h-4 w-4 text-zinc-300" />,
    title: uniqueFeaturesCardThreeTitle,
    description: uniqueFeaturesCardThreeSubtitle,
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <ScanEye className="h-4 w-4 text-zinc-300" />,
    title: uniqueFeaturesCardFourTitle,
    description: uniqueFeaturesCardFourSubtitle,
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: <CodeXml className="h-4 w-4 text-zinc-300" />,
    title: uniqueFeaturesCardFiveTitle,
    description: uniqueFeaturesCardFiveSubtitle,
  },
];

export function GeneralFeatures() {
  return (
    <div className="mt-40 mb-24">
      {/* Section title */}
      <div className="text-3xl font-semibold mx-auto text-white text-center mb-16">
        {uniqueFeatures}
      </div>

      {/* Grid container */}
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        {gridItemsData.map((item, index) => (
          <GridItem
            key={index}
            area={item.area}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 shadow-[0px_0px_27px_0px_#27272a] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-zinc-500 p-2 ">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem] text-zinc-400"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
