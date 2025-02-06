"use client";
import { Carousel } from "@/components/ui/carousel";
import SkyLineShotOne from "../../../../public/assets/gallery/skyline/SkyLine_gallery_one.jpg";
import SkyLineShotTwo from "../../../../public/assets/gallery/skyline/SkyLine_gallery_two.jpg";
import SkyLineShotThree from "../../../../public/assets/gallery/skyline/SkyLine_gallery_three.jpg";
import SkyLineShotFour from "../../../../public/assets/gallery/skyline/SkyLine_gallery_four.jpg";
import SkyLineShotFive from "../../../../public/assets/gallery/skyline/SkyLine_gallery_five.jpg";
import SkyLineShotSix from "../../../../public/assets/gallery/skyline/SkyLine_gallery_six.jpg";
import SkyLineShotSeven from "../../../../public/assets/gallery/skyline/SkyLine_gallery_seven.jpg";
import { Spotlight } from "@/components/ui/spotlight-new";

const SkyLineShots = () => {
  const slideData = [
    { src: SkyLineShotThree.src },
    { src: SkyLineShotOne.src },
    { src: SkyLineShotTwo.src },
    { src: SkyLineShotFour.src },
    { src: SkyLineShotFive.src },
    { src: SkyLineShotSix.src },
    { src: SkyLineShotSeven.src },
  ];
  return (
    <div>
      <Spotlight />
      <div className="relative overflow-hidden w-full h-full mb-10 pb-20">
        <Carousel slides={slideData} />
      </div>
    </div>
  );
};

export default SkyLineShots;
