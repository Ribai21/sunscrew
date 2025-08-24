import React from "react";
import products from "./Data/ProductData";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <section id="product" className="bg-gray-100 w-full p-3 md:p-10">
      <h1 className="text-4xl fadeup text-center md:text-5xl m-3 mb-6 font-bold">
        Our <span className="text-yellow-500">Products</span>
        <hr className="bg-yellow-500 h-1 w-[15%] rounded mt-3 mx-auto" />
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto justify-items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Product;
