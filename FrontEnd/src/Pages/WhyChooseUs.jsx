import React from 'react'
import Why from '../component/Why'
import Testimonials from '../component/Testimonials'
import TopImage from '../component/TopImage'
import why from '../assets/why1.png'
const WhyChooseUs = () => {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto ">
       <TopImage
          imageUrl={why}
          title="Why Choose Us"
          subtext="Learn more about our journey, mission, and values."
          overlayOpacity={0.6} height="h-[400px]"
        />
        <Why />
        <Testimonials />
      </div>
    </div>
  )
}

export default WhyChooseUs