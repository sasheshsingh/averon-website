"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import {
  ourVisionCardOneSubtitle,
  ourVisionCardOneTitle,
  ourVisionCardThreeSubtitle,
  ourVisionCardThreeTitle,
  ourVisionCardTwoSubtitle,
  ourVisionCardTwoTitle,
  ourVisionTitle,
} from "@/data/content";
import { Hotel, Cpu, ShieldCheck } from "lucide-react"; 

// Static hardcoded data for the cards
const visionCardsData = [
  {
    title: ourVisionCardOneTitle,
    subtitle: ourVisionCardOneSubtitle,
    icon: ShieldCheck,
  },
  {
    title: ourVisionCardTwoTitle,
    subtitle: ourVisionCardTwoSubtitle,
    icon: Hotel,
  },
  {
    title: ourVisionCardThreeTitle,
    subtitle: ourVisionCardThreeSubtitle,
    icon: Cpu,
  },
];

// Card component
interface CardProps {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}

const Card = ({ title, subtitle, icon: Icon }: CardProps) => {
  return (
    <div className="w-[25rem]">
      <BackgroundGradient className="rounded-[22px] p-4 h-[15rem] sm:p-10 bg-zinc-950">
        <Icon className="w-10 h-10 text-zinc-300" />{" "}
        {/* Render the icon dynamically */}
        <p className="font-semibold sm:text-xl text-white mt-4 mb-2">{title}</p>
        <p className="text-sm text-zinc-400 text-justify leading-6">
          {subtitle}
        </p>
      </BackgroundGradient>
    </div>
  );
};

// Vision component
const Vision = () => {
  return (
    <div className="w-11/12 mx-auto mt-12 mb-24">
      {/* Section title */}
      <div className="text-3xl font-semibold mx-auto text-white text-center mb-16">
        {ourVisionTitle}
      </div>

      {/* Card Container */}
      <div className="flex flex-row justify-between gap-4">
        {visionCardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Vision;
