import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './Pages/Home';
import Products from './Pages/Products';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';
import WhyChooseUs from './Pages/WhyChooseUs';
import ProductDetail from './Pages/ProductDetail';
import NotFound from './Pages/NotFound';
import load from './assets/logorevised.jpg';
const App = () => {
  const [loading, setLoading] = useState(true);
  const [visibility, setVisibility] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []); 

  // Now safe to check loading after all hooks are declared
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white/10">
        {/* <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-500"></div> */}
         <img src={load} alt="" className='h-20 animate-pulse transition duration-75' />
      </div>
    );
  }

  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="why-choose-us" element={<WhyChooseUs />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <div
        className={`fixed z-50 bottom-4 right-7 bg-yellow-500 p-3 rounded-full shadow-lg ${
          visibility ? 'scale-100' : 'scale-0'
        } hover:bg-yellow-600 transition-all duration-300`}
      >
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white">
          <FaArrowUp size={24} />
          <span className="absolute w-full h-full top-0 left-0 rounded-full animate-ping transition-all duration-1000 border border-yellow-600"></span>
        </button>
      </div>
    </div>
  );
};

export default App;
