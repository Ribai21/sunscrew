import React from 'react'
import heroimg from '../assets/oglogo.jpeg'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
const Hero = () => {
return (
    <section id="/" className="flex flex-col bg-gradient-to-t p-3 md:p-0 items-center justify-center bg-no-repeat min-h-screen bg-cover bg-fixed  bg-center text-white" style={{ backgroundImage: `url(https://img.freepik.com/premium-photo/screws-pattern_87540-1393.jpg)` }}>
        
        <h1 className="text-5xl text-start font-bold mb-4 text-yellow-500">Precision Screws.</h1>
        <h1 className="text-5xl font-bold mb-4 text-yellow-500">Trusted Strength.</h1>
        <p className="text-xl font-semibold  mb-8">Delivering world-class fastening solutions with unmatched quality and precision manufacturing.</p>
       <div className="flex  gap-5">

         <Link to='product' smooth={true}>
         <div className="bg-yellow-500   relative text-center font-semibold text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300">
            Get Started
            <span className='absolute w-full h-full top-0 left-0 rounded-lg animate-puls transition-all duration-1000 border-2 border-yellow-600'></span>
        </div>
        </Link>
         <Link to='contact' smooth={true}>
         <div className="bg-yellow-500   relative text-center font-semibold text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300">
           Contact Us
            <span className='absolute w-full h-full top-0 left-0 rounded-lg animate-puls transition-all duration-1000 border-2 border-yellow-600'></span>
        </div>
        </Link>
         
        
          
       </div>
    </section>
)
}

export default Hero