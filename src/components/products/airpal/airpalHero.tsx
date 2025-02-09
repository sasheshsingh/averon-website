import React from "react";
import { TypewriterEffect } from "../../ui/typewriter-effect";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { airpalPageHeroSubtitle, airpalPageHeroTitleOne, airpalPageHeroTitleTwo } from "@/data/content";

const AirPalHero = () => {
  const texts = [
    airpalPageHeroTitleOne,
    airpalPageHeroTitleTwo,
  ];

  return (
    <div className="mx-auto rounded-md h-[50rem] overflow-hidden">
      <div className="h-[50rem] flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-zinc-950 w-full gap-4 mx-auto px-8 relative">
        <div className="mb-36 flex flex-col items-center justify-center h-[40rem] relative z-10">
          <p className="text-zinc-200 text-xl mb-4">
            {airpalPageHeroSubtitle}
          </p>
          <TypewriterEffect texts={texts} />
        </div>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0 z-0"
          >
            <CanvasRevealEffect
              animationSpeed={0.8}
              containerClassName="bg-transparent"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={2}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AirPalHero;
