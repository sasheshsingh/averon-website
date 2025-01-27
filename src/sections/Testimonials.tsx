import FeatureCard from "@/components/FeatureCard";
import React from "react";

export const Testimonials = () => {
  return (
      <section>
          <div className="container">
              <h1 className="text-center text-white/50 text-7xl py-24"> Our Features</h1>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 py-28">
              <FeatureCard title={"Working with Real Time"} description={"Lorem Ipsum Generator"}></FeatureCard>
            <FeatureCard title={"Working with Real Time"} description={"Lorem Ipsum Generator"}></FeatureCard>
            <FeatureCard title={"Working with Real Time"} description={"Lorem Ipsum Generator"}></FeatureCard>
        </div>
      </section>
  );
};
