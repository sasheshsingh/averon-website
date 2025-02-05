import React from "react";
import { Hero, Highlight } from "./hero";

const HomeScreen = () => {
  return (
    <div className="max-w-screen-2xl mx-auto w-full">
      <Hero>
        Hello Team
        <Highlight>Welcome to Averon</Highlight>
      </Hero>
    </div>
  );
};

export default HomeScreen;
