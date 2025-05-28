import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Product from './Product'
import Why from './Why'
import Footer from './Footer'
import Testimonials from './Testimonials'
import Contact from './Contact'

const Landing = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Product/>
        <Why/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Landing