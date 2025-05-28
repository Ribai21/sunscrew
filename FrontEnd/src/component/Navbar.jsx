import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { CgMenuRightAlt } from "react-icons/cg";
import { RiCloseLargeLine } from "react-icons/ri";
import {Link} from 'react-scroll';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('Home');
    
    const nav =[
        {
        id: 1,
        name: 'Home',
        link: '/'
    }, {
        id: 2,
        name: 'Product',
        link: 'product'
    }, {
        id: 3,
        name: 'About',
        link: 'about'
    }, {
        id: 4,
        name: 'Contact',
        link: 'contact'
    },
     {
        id: 5,
        name: 'Testimonials',
        link: 'testimonials'
    }]

return (
    
    <div className='sticky top-0 z-50'>
        <nav className="flex items-center relative w-full top-0 justify-between h-20 py-3 px-4 bg-white ">
            <div className="flex items-center">
                <img src={logo} alt="Company Logo" className="h-24 mt-3 ms-8" />
            </div>
            <ul className="md:flex hidden  items-center   gap-8 list-none mr-9 p-0">
                {nav.map((item)=>(
                    <li
                    key={item.id}
              onClick={() => setActiveMenu(item.name)}
              className={`cursor-pointer px-4 py-2 rounded-md font-medium transition duration-300 ${
                activeMenu === item.name
                  ? 'bg-yellow-500 text-white'
                  : 'text-gray-900 hover:text-yellow-600'
              }`}
                   >
                    <Link to={item.link} smooth={true} className="no-underline  text-gray-900 font-medium hover:text-yellow-600">{item.name}</Link>
                </li>
                ))}
                <Link to='contact' smooth={true}><div className="bg-yellow-500  relative font-semibold text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300">
            Get Quote
            <span className='absolute w-full h-full top-0 left-0 rounded-lg animate-puls transition-all duration-1000 border-2 border-yellow-600'></span>
        </div></Link>
            </ul>
            {/* Mobile Menu Button */}
            <div className="md:hidden  flex items-center">
                <button onClick={()=>setOpen(!open)} className="text-gray-700 hover:text-blue-500 focus:outline-none">
                   
                    {open ? <CgMenuRightAlt size={30} className='text-yellow-500'/>  : <RiCloseLargeLine size={30} className="text-yellow-500" />}
                </button>
            </div>
            <div className={`absolute top-0   h-screen w-56 z-50 ${open? "-left-[100%]" : "left-0"} transition-all duration-700 bg-white shadow-lg md:hidden flex flex-col items-center gap-4 p-4`}>
                <ul className='list-none p-5 font-semibold space-y-10'>
                   {nav.map((item)=>(
                    <li key={item.id} className="text-gray-700 hover:text-blue-500">
                    <Link to={item.link} smooth={true} className="no-underline text-gray-900 font-medium hover:text-yellow-600">{item.name}</Link>
                </li>
                ))}
                
                </ul>
                
            </div>
        </nav>
    </div>
)
}

export default Navbar

