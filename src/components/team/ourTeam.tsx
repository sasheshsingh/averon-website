"use client";

import { useState, useEffect } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Pars from "../../../public/assets/team/pars.jpg";
import Albert from "../../../public/assets/team/albert.jpg";
import Rui from "../../../public/assets/team/rui.jpeg";
import Carolina from "../../../public/assets/team/carolina.jpg";
import Joao from "../../../public/assets/team/joao.jpg";
import {
  albertRole,
  albertSubtitle,
  albertTitle,
  carolinaRole,
  carolinaSubtitle,
  carolinaTitle,
  parsRole,
  parsSubtitle,
  parsTitle,
  ruiRole,
  ruiSubtitle,
  ruiTitle,
} from "@/data/content";

const OurTeam = () => {
  const [showTestimonials, setShowTestimonials] = useState(false);

  const testimonials1 = [
    {
      quote: parsSubtitle,
      name: parsTitle,
      designation: parsRole,
      src: Pars.src,
    },
    {
      quote: "",
      name: "",
      designation: "",
      src: Carolina.src,
    },
    {
      quote: "",
      name: "",
      designation: "",
      src: Rui.src,
    },
    {
      quote: "",
      name: "",
      designation: "",
      src: Joao.src,
    },
  ];

  const testimonials2 = [
    {
      quote: ruiSubtitle,
      name: ruiTitle,
      designation: ruiRole,
      src: Rui.src,
    },
    {
      quote: "",
      name: "",
      designation: "",
      src: Pars.src,
    },
    {
      quote: "",
      name: "",
      designation: "",
      src: Carolina.src,
    },
    {
      quote: "",
      name: "",
      designation: "",
      src: Joao.src,
    },
  ];

  const testimonials3 = [
    {
      quote: albertSubtitle,
      name: albertTitle,
      designation: albertRole,
      src: Albert.src,
    },
    {
      quote: "",
      name: "",
      designation: "",
      src: Rui.src,
    },
    {
      quote: "",
      name: "",
      designation: "",
      src: Pars.src,
    },
    {
      quote: "",
      name: "",
      designation: "",
      src: Joao.src,
    },
  ];

  const testimonials4 = [
    {
      quote: carolinaSubtitle,
      name: carolinaTitle,
      designation: carolinaRole,
      src: Carolina.src,
    },
    {
      quote: "",
      name: "",
      designation: "",
      src: Rui.src,
    },
    {
      quote: "",
      name: "",
      designation: "",
      src: Pars.src,
    },
    {
      quote: "",
      name: "",
      designation: "",
      src: Joao.src,
    },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTestimonials(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showTestimonials && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Row */}
          <div>
            <AnimatedTestimonials testimonials={testimonials1} />
          </div>
          <div>
            <AnimatedTestimonials testimonials={testimonials2} />
          </div>

          {/* Second Row */}
          <div>
            <AnimatedTestimonials testimonials={testimonials3} />
          </div>
          <div>
            <AnimatedTestimonials testimonials={testimonials4} />
          </div>
        </div>
      )}
    </>
  );
};

export default OurTeam;
