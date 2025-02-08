import { Carousel } from "@/components/ui/carousel";
import React from "react";
import AirPalShotOne from "../../../../public/assets/gallery/airpal/AirPal_gallery_one.jpg";
import AirPalShotTwo from "../../../../public/assets/gallery/airpal/AirPal_gallery_two.png";
import AirPalShotThree from "../../../../public/assets/gallery/airpal/AirPal_gallery_three.png";
import AirPalShotFour from "../../../../public/assets/gallery/airpal/AirPal_gallery_four.gif";

const AirPalShots = () => {
  const slideData = [
    { src: AirPalShotOne.src },
    { src: AirPalShotTwo.src },
    { src: AirPalShotThree.src },
    { src: AirPalShotFour.src },
  ];
  return (
    <div className="h-[50rem] w-full bg-zinc-950 bg-grid-white/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="mt-32 mb-20">
        <div className="relative overflow-hidden w-full h-full mb-10 pb-20 object-contain">
          <Carousel slides={slideData} />
        </div>
      </div>
    </div>
  );
};

export default AirPalShots;
