import React from 'react'
import img1 from '../assets/screw1.jpg'
import img2 from '../assets/screw2.jpg'
import img3 from '../assets/screw3.jpg'
import img4 from '../assets/screw4.jpg'
import img5 from '../assets/screw5.jpg'
import { useNavigate } from 'react-router-dom'

const Product = () => {
  const navigate = useNavigate();
    const products = [
        {
            id: 1,
            image:img1,
            name: 'DryWall Screw 1',
            description: 'Fine threads for easy securing of drywall panels. Bugle-shaped heads ensure a smooth finish, reducing damage risk.',
            price: '$10'
        },
        {
            id: 2,
            image:img2,
            name: 'DryWall Screw 2',
            description: 'Coated for  resistance, durable, and easy to use.Eliminates the need for pre-drilling holes, streamlining installation.',
            price: '$20'
        },
        {
            id: 3,
            image:img3,
            name: 'DryWall Screw 3',
            description: 'Ideal for carpenters and DIY enthusiasts. Quick and hassle-free installations save valuable time.',
            price: '$30'
        },
        {
            id: 4,
            image:img4,
            name: 'DryWall Screw 4',
            description: 'Suitable for various applications. Contributes to a smoother, more efficient construction experience.',
            price: '$30'
        },
        {
            id: 5,
            image:img5,
            name: 'DryWall Screw 5',
            description:'Renowned for its durability and resistance to corrosion, ensuring longevity in various environments',
            price: '$30'
        }
    ];
  return (
    // grid grid-cols-1 justify-evenly items-center md:grid-cols-2 gap-3 lg:grid-cols-3
    <div>
        <section id='product' className="bg-gray-100 w-full p-3 md:p-10">
            <h1 className=' text-4xl  text-center  md:text-5xl m-3 mb-6 font-bold'>Our <span className='text-yellow-500'>Products</span><hr className='bg-yellow-500 h-1 w-[15%] rounded mt-3 mx-auto' /></h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto justify-items-center">
  {products.map(product => (
    <div key={product.id} className="bg-white p-3 rounded-lg shadow-lg flex flex-col items-center text-center w-full max-w-[250px]">
      <div className="">
        <img src={product.image} alt={product.name} className="w-full hover:scale-105 transition duration-300 mb-3 rounded-md h-auto" />
      </div>
      <div className="w-full">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4 text-justify">{product.description}</p>
        <p className="text-lg font-bold text-yellow-500">{product.price}</p>
        <button
        onClick={()=> navigate('/dryscrew')}
        className="w-full bg-yellow-500 px-3 py-2 mt-2 rounded-md font-semibold hover:bg-yellow-600 transition duration-100 active:scale-95">
          Learn More
        </button>
      </div>
    </div>
  ))}
</div>


        </section>
    </div>
  )
}

export default Product