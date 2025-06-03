import React from 'react'
import logo from '../assets/logorevised.jpg'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { Links, useNavigate } from 'react-router-dom'
const Footer = () => {
  const navigate =useNavigate();
  return (
   <footer className="bg-[#1d2a3a]  text-white px-6 md:px-12 py-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    
    {/* Company Info with Logo */}
    <div>
      <img src={logo} alt="SUN Screws Logo" className="h-20 mb-2 " />
      <p className="text-sm leading-relaxed">
        Precision Screws. Trusted Strength. <br />
        Your reliable partner for world-class fastening solutions with over 25 years of industry experience.
      </p>

      {/* Social Icons */}
      <div className="flex gap-3 mt-4">
        <a href=""><FaInstagram size={29} className='hover:text-yellow-500 hover:-translate-y-2 transition duration-150'/></a>
        <a href=""><FaWhatsapp size={29} className='hover:text-yellow-500 hover:-translate-y-2 transition duration-150'/></a>
       <a href=""><FaFacebook size={29} className='hover:text-yellow-500 hover:-translate-y-2 transition duration-150'/></a>
        

      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-bold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><Link to='/' className="text-yellow-500 cursor-pointer hover:text-yellow-500">Home</Link></li>
        <li><Link to="product"  smooth={true} className="cursor-pointer hover:text-yellow-500">Products</Link></li>
        <li><Link to="about" smooth={true} className="hover:text-yellow-500 cursor-pointer">About Us</Link></li>
        <li><Link to="contact" smooth={true} className="hover:text-yellow-500 cursor-pointer">Contact</Link></li>
        <li><Link to="/" className="hover:text-yellow-500 cursor-pointer">Quality Assurance</Link></li>
      </ul>
    </div>

    {/* Our Products */}
    <div>
      <h3 className="text-lg font-bold mb-4">Our Products</h3>
      <ul className="space-y-2 text-sm">
        <li className='cursor-pointer hover:text-yellow-500'>Hex Head Screws</li>
        <li className='cursor-pointer hover:text-yellow-500'>Wood Screws</li>
        <li className='cursor-pointer hover:text-yellow-500'>Machine Screws</li>
        <li className='cursor-pointer hover:text-yellow-500'>Self-Tapping Screws</li>
        <li className='cursor-pointer hover:text-yellow-500'>Drywall Screws</li>
      </ul>
    </div>

    {/* Newsletter */}
    <div>
      <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
      <p className="text-sm mb-4">
        Subscribe to our newsletter for the latest product updates and industry insights.
      </p>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 bg-[#1f2a3d] text-white border border-gray-600 rounded mb-3 focus:outline-none"
      />
      <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded">
        Subscribe
      </button>
    </div>

  </div>

  {/* Footer Bottom */}
  <div className="border-t border-gray-600 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
    <p>© 2024 SUN Screws. All rights reserved. | ISO 9001 Certified</p>
    <div className="flex gap-4 mt-2 md:mt-0">
      <a href="#" className="hover:text-yellow-500">Privacy Policy</a>
      <a href="#" className="hover:text-yellow-500">Terms of Service</a>
      <a href="#" className="hover:text-yellow-500">Quality Standards</a>
    </div>
  </div>
</footer>

  )
}

export default Footer