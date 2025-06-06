
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Products from '../component/Data/ProductData'
import { CgArrowLeft } from 'react-icons/cg';
import load from '../assets/logorevised.jpg'
const ProductDetail = () => {
  const [loading,setLoading] = useState(true);
  const { id } = useParams();
  const product = Products.find(p => p.id === parseInt(id));
  const navigate = useNavigate();
  // Prevent crash on first render
  const [selectedImage, setSelectedImage] = useState(product?.image);

  if (!product) {
    return <div className="text-center text-red-600 mt-10">Product not found.</div>;
  }
  useEffect(()=>{
    const timer =setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  },[])
  if(loading){
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        {/* <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-500"></div> */}
        <img src={load} alt="" className='h-20 animate-pulse transition duration-75' />
      </div>
    );
  }

  return (
    <>
     <div className="h-screen w-full  p-5 md:p-10 mt-10 flex flex-col md:flex-row items-center">
      <div className="static md:absolute top-5 left-5 z-10">
        <CgArrowLeft size={29} className="cursor-pointer text-yellow-500 inline-block hover:text-yellow-600 transition-all duration-300" onClick={() => navigate(-1)} />
      </div>
      <div>
        <img
          src={selectedImage}
          alt={product.name}
          className=" md:max-w-md rounded shadow-md"
        />
        <div className="flex overflow-auto w-full gap-2 mt-4">
          {[product.image,...(product.subImages || [])].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumb ${idx}`}
              onClick={() => setSelectedImage(img)}
              className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${
                selectedImage === img ? 'border-yellow-500' : 'border-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Product details */}
      <div className="md:ml-6 text-justify w-full mt-6 md:mt-0 space-y-3">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p>{product.description}</p>
        <p><strong>Price:</strong> {product.price}</p>
        <p><strong>Type:</strong> {product.type}</p>
        <p><strong>Material:</strong> {product.material}</p>
        <p><strong>Usage:</strong> {product.usage}</p>
      </div>
    </div>
    </>
   
  );
};

export default ProductDetail;
