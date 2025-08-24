import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react"; // optional (for location icon)

const ProductCard = ({ id, image, name, description, address }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-[320px]">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 hover:scale-110  transform transition duration-300 object-cover"
      />

      {/* Dark Section (like in your screenshot) */}
      <div className="bg-[#0f172a] text-white p-5">
        {/* Product Name */}
        <h2 className="text-lg font-bold mb-3">{name}</h2>

        {/* Product Description */}
        <p className="text-sm text-gray-300 mb-2">
          {description.length > 60 ? `${description.substring(0, 60)}... `  : description}
        </p>
        
        {description.length > 60 && (
           <Link
            to={`/product/${id}`}
            className="text-yellow-500 font-bold text-sm hover:underline flex items-center gap-1"
          >
            DETAILS →
          </Link>
        )}

        {/* Bottom Section: Address + Details */}

      </div>
    </div>
  );
};

export default ProductCard;
