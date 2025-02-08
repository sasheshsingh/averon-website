import React from "react";
import TeamHero from "./teamHero";
import OurMission from "./ourMission";

const TeamScreen = () => {
  return (
    <div className="mx-auto w-full">
        <TeamHero />
        <OurMission />
      {/* <div className="max-w-screen-2xl mx-auto">
      </div> */}
    </div>
  );
};

export default TeamScreen;
