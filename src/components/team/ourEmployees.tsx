"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";

type Employee = {
  id: number;
  name: string;
  designation: string;
  image: string;
};

const OurEmployees = ({ employees }: { employees: Employee[] }) => {
  return (
    <div className="my-20 flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={employees} />
    </div>
  );
};

export default OurEmployees;
