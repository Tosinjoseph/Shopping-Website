import React from 'react'
import { FaStar } from 'react-icons/fa'

const ProductCard = ({product}) => {
  return (
    <div className='bg-white shadow-lg p-4 rounded relative 
     transform transition-transform duration-300 hover:scale-105'>
    <img src={product.image} alt="" className='w-full h-48 mb-4 object-contain' />
    <h3 className='text-lg font-semibold'>{product.title}</h3>
    <p className='text-gray-500'>${product.price}</p>
    <div className='flex items-center mt-2'>
        <FaStar className='text-yellow-500'></FaStar>
        <FaStar className='text-yellow-500'></FaStar>
        <FaStar className='text-yellow-500'></FaStar>
        <FaStar className='text-yellow-500'></FaStar>
    </div>
    <div className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600
     group text-white text-small rounded-full hover:w-32 hover:bg-red-700 cursor-pointer transition-all'>
        <span className='group-hover:hidden'>+</span>
        <span className='group-hover:block'>Add to cart</span>
    </div>
    </div>
  )
}

export default ProductCard