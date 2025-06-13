import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import products from "./Data/ProductData";
const Product = () => {
  

  return (
    // grid grid-cols-1 justify-evenly items-center md:grid-cols-2 gap-3 lg:grid-cols-3
    <div>
      <section
      
      id="product" className="bg-gray-100 w-full p-3 md:p-10">
        <h1  className=" text-4xl fadeup  text-center  md:text-5xl m-3 mb-6 font-bold">
          Our <span className="text-yellow-500">Products</span>
          <hr className="bg-yellow-500 h-1 w-[15%] rounded mt-3 mx-auto" />
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto justify-items-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-3 rounded-lg shadow-lg ani flex flex-col items-center text-center w-full max-w-[250px]"
            >
              <div className="">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full hover:scale-105  transition duration-300 mb-3 rounded-md "
                />
              </div>
              <div className="w-full">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-700 mb-4 text-justify">
                  {product.description}
                </p>
                <p className="text-lg font-bold text-yellow-500">
                  ₹150 <span className="text-[10px]">(Perbox 100pcs)</span>
                </p>
                <Link to={`/product/${product.id}`}>
                  <button className="w-full bg-yellow-500 px-3 py-2 mt-2 rounded-md font-semibold hover:bg-yellow-600 transition duration-100 active:scale-95">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;
