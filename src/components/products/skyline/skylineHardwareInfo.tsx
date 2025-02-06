import React from "react";
import { Key } from "lucide-react";
import HardwareImageOne from "../../../../public/assets/gallery/skyline/hardware_info/waterproof.jpg";
import Image from "next/image";

// I THINK ITS NOT TOO GOOD 
// THIS NEEDS TO BE CHANGED BRO

// INSTEAD OF THIS I CAN ADD Background Overlay Card FROM THE LIB

const SkyLineHardwareInfo = () => {
  return (
    <div></div>
  );
};

export default SkyLineHardwareInfo;

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Image className="w-11/12 mx-auto h-32 rounded-xl grayscale-[50%] blur-[1.5px]" src={HardwareImageOne} alt="" />,
    icon: <Key className="h-4 w-4 text-zinc-300" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Image className="w-11/12 mx-auto h-32 rounded-xl grayscale-[50%] blur-[1.5px]" src={HardwareImageOne} alt="" />,
    icon: <Key className="h-4 w-4 text-zinc-300" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <Key className="h-4 w-4 text-zinc-300" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <Key className="h-4 w-4 text-zinc-300" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <Key className="h-4 w-4 text-zinc-300" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <Key className="h-4 w-4 text-zinc-300" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <Key className="h-4 w-4 text-zinc-300" />,
  },
];
