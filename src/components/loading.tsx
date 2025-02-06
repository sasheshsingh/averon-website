"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AveronLoadingLogo from "@/assets/AveronLoading.svg";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 flex flex-col items-center justify-center bg-zinc-950 z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AveronLoadingLogo />
          <motion.div
            className="mt-4 h-1 w-24 bg-white"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
