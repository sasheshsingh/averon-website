import { ourMissionSubtitle, ourMissionTitle } from "@/data/content";
import React from "react";
import { Vortex } from "../ui/vortex";

const OurMission = () => {
  return (
    <div className="mb-24 mx-auto rounded-md h-[40rem] overflow-hidden">
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={100}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <div className="bg-clip-text text-transparent bg-gradient-to-b from-white to-indigo-400 text-4xl font-semibold mx-auto text-center">
          {ourMissionTitle}
        </div>
        <p className="text-center text-xl font-normal text-zinc-300 w-6/12 leading-10 mt-3 mx-auto">
          {ourMissionSubtitle}
        </p>
      </Vortex>
    </div>
  );
};

export default OurMission;
