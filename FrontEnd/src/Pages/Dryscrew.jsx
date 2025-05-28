import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import screw1 from "../assets/Dryscrew/d1.jpg";
import screw2 from "../assets/Dryscrew/d2.jpg";
import screw3 from "../assets/Dryscrew/d3.jpg";
import screw4 from "../assets/Dryscrew/d4.jpg";
const screwImages = [
    screw1,
    screw2,
    screw3,
    screw4,
];

const Dryscrew = () => {
  const [mainImage, setMainImage] = useState(screwImages[0]);

  return (
    <>
        <Navbar/>
    <div className="max-w-6xl bg-gray-100 mx-auto my-10  p-6 border rounded-md flex gap-8">
      {/* Left side */}
      <div className="flex flex-col items-center w-1/2">
        <img
          src={mainImage}
          alt="Screw"
          className="w-64 h-64 object-contain rounded-lg border"
        />

        {/* Slider */}
        <div className="flex gap-4 mt-4 overflow-x-auto">
          {screwImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setMainImage(img)}
              className={`border rounded-md p-1 transition-transform transform hover:scale-110 ${
                mainImage === img ? "border-blue-500" : "border-gray-300"
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="w-16 h-16 object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right side - Details */}
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold mb-4">Screw Details</h2>
        <p className="mb-2">
          <strong>Type:</strong> Phillips Head Screw
        </p>
        <p className="mb-2">
          <strong>Material:</strong> Stainless Steel
        </p>
        <p className="mb-2">
          <strong>Size:</strong> M4 x 20mm
        </p>
        <p className="mb-2">
          <strong>Thread:</strong> Coarse
        </p>
        <p>
          <strong>Usage:</strong> Used for fastening wood and metal components
          securely.
        </p>
      </div>
      <div className="">
       
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default Dryscrew;
