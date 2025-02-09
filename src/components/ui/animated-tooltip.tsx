"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move

  // Rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  // Translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // Set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="relative group mx-3"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.75 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 12,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.75 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-20 -left-1/2 translate-x-1/2 flex flex-col items-center justify-center rounded-xl bg-black z-50 shadow-2xl px-6 py-3"
              >
                <div className="absolute inset-x-10 z-30 w-[35%] -bottom-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px" />
                <div className="absolute left-10 w-[50%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                <div className="font-bold text-white relative z-30 text-lg">
                  {item.name}
                </div>
                <div className="text-white text-sm">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={180}
            width={180}
            src={item.image}
            alt={item.name}
            className="object-cover rounded-full h-28 w-28 group-hover:scale-115 shadow-xl shadow-zinc-900 relative transition duration-500"
          />
        </div>
      ))}
    </>
  );
};
