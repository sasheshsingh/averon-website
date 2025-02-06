"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current) {
      const animate = () => {
        const svgRect = svgRef.current!.getBoundingClientRect();
        const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
        const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
        setMaskPosition({ cx: `${cxPercentage}%`, cy: `${cyPercentage}%` });
      };
      animate();
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      <defs>
        <motion.linearGradient
          id="animatedGradient"
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          animate={{ x1: ["0%", "100%", "0%"], x2: ["100%", "0%", "100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <stop offset="0%" stopColor="var(--yellow-500)" />
          <stop offset="25%" stopColor="var(--red-500)" />
          <stop offset="50%" stopColor="var(--blue-500)" />
          <stop offset="75%" stopColor="var(--cyan-500)" />
          <stop offset="100%" stopColor="var(--violet-500)" />
        </motion.linearGradient>
      </defs>

      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#animatedGradient)"
        strokeWidth="0.5"
        className="font-[helvetica] font-bold fill-transparent text-4xl"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 10, ease: "easeInOut" }}
      >
        {text}
      </motion.text>
    </svg>
  );
};
