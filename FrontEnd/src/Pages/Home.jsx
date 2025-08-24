import React from 'react'
import Hero from '../component/Hero'
import About from '../component/About'
import Product from '../component/Product'
import Why from '../component/Why'
import Testimonials from '../component/Testimonials'
import Contact from '../component/Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Product />
      {/* <Why /> */}
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Home