import React from 'react'
import Product from '../component/Product'
import TopImage from '../component/Topimage'
import product from '../assets/product.png'
const Products = () => {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto ">
        <TopImage
          imageUrl={product}
          title="Explore Our Products"
          subtext="Discover a wide range of high-quality fasteners and screws."
          overlayOpacity={0.6} height="h-[400px] bg-bottom"
        />
        <Product />
      </div>
    </div>
  )
}

export default Products