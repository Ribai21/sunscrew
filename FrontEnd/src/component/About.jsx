import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Only animate once
    threshold: 0.3, // Start when 30% visible
  });
  return (
    <div>
      <section
        ref={ref}
        id="about"
        className="bg-gray-100 p-3 text-center   md:p-10"
      >
        <h1 className="text-5xl md:m-3 m-5 fadeup font-bold">
          Our <span className="text-yellow-500">Story</span>
          <hr className="bg-yellow-500 h-1 w-[10%] rounded mt-3 mx-auto" />
        </h1>
        <p className="indent-32 textup  text-lg text-justify">
          Founded in [2015], Sun Screw started with a simple yet powerful goal:
          to create screw products that deliver unmatched quality and
          performance at every turn. Over the past 10 years, we've: Expanded
          from a small manufacturing unit to a full-scale production facility
          Partnered with hundreds of businesses across India and beyond Invested
          in the latest machinery and testing equipment to ensure accuracy in
          every product Today, our screws are not just products — they are
          solutions trusted by professionals who build, fix, and innovate.
        </p>
        <p className="indent-32 textup  text-lg text-justify">
          With over a decade of hands-on industry experience, Sun Screw has
          grown into a trusted name in the world of screw and fastener
          manufacturing. What began as a small, quality-focused unit has now
          become a leading provider of screw products that power projects across
          industries — from construction and machinery to home fittings and
          custom engineering. At the core of Sun Screw’s values lies an
          unwavering commitment to precision, reliability, and customer
          satisfaction. Every screw we produce reflects our promise of strength,
          durability, and flawless performance.
        </p>
      </section>
      <section className="flex fadeup bg-[#1d2a3a] justify-evenly items-center  flex-wrap gap-5 p-5 text-capitaliz">
        <div className="flex flex-col text-white text-xl justify-center gap-2 items-center">
          <span className="text-yellow-500 text-4xl font-bold ">
            <CountUp end={9} duration={2} />+
          </span>
          Years of experience
        </div>
        <div className="flex flex-col text-white text-xl justify-center gap-2 items-center">
          <span className="text-yellow-500 text-4xl font-bold ">
            <CountUp end={365} duration={2} />
            Days
          </span>
          Stock available
        </div>
        <div className="flex flex-col text-white text-xl justify-center gap-2 items-center">
          <span className="text-yellow-500 text-4xl font-bold ">
            <CountUp end={200} duration={2} />+
          </span>
          Happy customer
        </div>
      </section>
    </div>
  );
};

export default About;
