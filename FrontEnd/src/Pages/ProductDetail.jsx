import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Products from '../component/Data/ProductData';
import { CgArrowLeft } from 'react-icons/cg';
import load from '../assets/logorevised.jpg';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const found = Products.find(p => p.id === parseInt(id));
    setProduct(found);
    setSelectedImage(found?.image || '');
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [id]);

  if (!product) {
    return (
      <div className="text-center text-red-600 mt-10">Product not found.</div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <img
          src={load}
          alt="Loading..."
          className="h-20 animate-pulse transition duration-75"
        />
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen w-full p-5 md:p-7 mt-10 flex flex-col md:flex-row items-center">
        <div className="static md:absolute top-5 left-5 z-10">
          <CgArrowLeft
            size={29}
            className="cursor-pointer text-yellow-500 inline-block hover:text-yellow-600 transition-all duration-300"
            onClick={() => navigate(-1)}
          />
        </div>
        <div>
          <img
            src={selectedImage}
            alt={product.name}
            className="md:max-w-md rounded shadow-md"
          />
          <div className="flex overflow-auto w-full gap-2 mt-4">
            {[product.image, ...(product.subImages || [])].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumb ${idx}`}
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${
                  selectedImage === img
                    ? 'border-yellow-500'
                    : 'border-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:ml-6 text-justify w-full mt-6 md:mt-0 space-y-3">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p>{product.description}</p>
          <p>
            <strong>Price:</strong> {product.price}
          </p>
          <p>
            <strong>Type:</strong> {product.type}
          </p>
          <p>
            <strong>Material:</strong> {product.material}
          </p>
          <p>
            <strong>Quantity:</strong> {product.quantity}
          </p>
          <p>
            <strong>Usage:</strong> {product.usage}
          </p>
          
        </div>
      </div>

      {/* Other Products */}
      <h1 className="text-4xl fadeup text-center md:text-5xl mb-6 font-bold">
        Other <span className="text-yellow-500">Products</span>
        <hr className="bg-yellow-500 h-1 w-[15%] rounded mt-3 mx-auto" />
      </h1>
      <div className="grid justify-items-center lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 px-4">
        {Products.filter(p => p.id !== product.id).map(item => (
          <div key={item.id} className="w-full h-[200px] max-w-[250px]">
            <div className="bg-white p-3 rounded-lg mb-6 shadow-lg ani flex flex-col items-center text-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-full hover:scale-105 transition duration-300 mb-3 rounded-md h-auto"
              />
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-700 mb-4 text-justify">
                {item.description}
              </p>
              <p className="text-lg font-bold text-yellow-500">
                ₹150 <span className="text-[10px]">(Perbox 100pcs)</span>
              </p>
              <Link to={`/product/${item.id}`}>
                <button className="w-full bg-yellow-500 px-3 py-2 mt-2 rounded-md font-semibold hover:bg-yellow-600 transition duration-100 active:scale-95">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDetail;
