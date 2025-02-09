import React from "react";
import TeamHero from "./teamHero";
import OurMission from "./ourMission";
import OurTeam from "./ourTeam";
import OurEmployees from "./ourEmployees";
import Slava from "../../../public/assets/team/slava.jpg";
import Michael from "../../../public/assets/team/michael.jpg";
import Yuvi from "../../../public/assets/team/yuvi.jpg";
import Rohit from "../../../public/assets/team/rohit.png";
import Rahul from "../../../public/assets/team/rahul.jpeg";
import Oliver from "../../../public/assets/team/oliver.jpg";
import Daniel from "../../../public/assets/team/daniel.jpeg";
import Alexandre from "../../../public/assets/team/alexandre.jpeg";
import Jose from "../../../public/assets/team/jose.jpeg";
import Sashesh from "../../../public/assets/team/sashesh.jpg";
import Joao from "../../../public/assets/team/joao.jpg";

const team1 = [
  { id: 1, name: "Alexandre Guerra", designation: "Product Director & UAV Developer", image: Alexandre.src },
  { id: 2, name: "Dani Carrión", designation: "IoT & Aerial Robotics Specialist", image: Daniel.src },
  { id: 3, name: "Jose Ortega", designation: "Industrial Mechanical Engineer", image: Jose.src },
  { id: 4, name: "Sashesh Singh", designation: "Senior Full Stack Developer", image: Sashesh.src },
  { id: 5, name: "Rohit Kumar", designation: "Lead Product Designer", image: Rohit.src },
];

const team2 = [
  { id: 6, name: "Rahul Verma", designation: "Commercial Lead", image: Rahul.src },
  { id: 7, name: "Michael Uchwat", designation: "Senior Product Animator", image: Michael.src },
  { id: 8, name: "Slava Kondrashov", designation: "Lead Product Animator", image: Slava.src },
  { id: 9, name: "Yuvraj Singh", designation: "Senior Product Designer", image: Yuvi.src },
  { id: 10, name: "João Pavão", designation: "Director of EU Relations", image: Joao.src },
  // { id: 11, name: "Oliver Slow", designation: "Chief Media Officer", image: Oliver.src },
];

const TeamScreen = () => {
  return (
    <div className="mx-auto w-full">
      <TeamHero />
      <OurMission />
      <div className="mb-24 max-w-screen-2xl mx-auto">
        <OurTeam />
        <OurEmployees employees={team1} />
        <OurEmployees employees={team2} />
      </div>
    </div>
  );
};

export default TeamScreen;
