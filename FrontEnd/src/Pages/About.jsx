import React from "react";
import About from "../component/About";
import Why from "../component/Why";
import TopImage from "../component/Topimage";
import about from '../assets/about.png'
const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto  ">
        <TopImage
          imageUrl={about}
          title="About Us"
          subtext="Learn more about our journey, mission, and values."
          overlayOpacity={0.6} height="h-[400px] "
        />
        <About />
        <Why />
      </div>
    </div>        
  );
};

export default AboutPage;
