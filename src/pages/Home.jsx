import React, { useEffect } from 'react'
import { Categories, mockData } from '../assets/mockData'
import InfoSection from '../components/InfoSection.jsx'
import CategorySection from '../components/CategorySection.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/productSlice.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Shop from './Shop.jsx'



const Home = () => {
    const dispatch = useDispatch();
    const products =useSelector(state=> state.product)
    useEffect(()=>{
    dispatch(setProducts(mockData))
    },[])
  return (
    <div>
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
        <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
            <div className='w-full md:w-3/12'>
                
                    <div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5'>SHOP BY CATEGORIES</div>
                    <ul className='space-y-4 bg-gray-100 p-3 border'>
                        {Categories.map((category, i)=>(
                            <li key={i} className='flex items-center text-sm font-medium'>
                                <div className='w-2 h-2 border border-red-500 rounded-full mr-2'></div>
                                {category}</li>
                        ))}
                    </ul>
            </div>
                <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
                    <img src="./hero-page.png" alt="" className='h-full w-full' />
                    <div className='absolute top-16 left-8'>
                        <p className='text-gray-600 mb-4'>Code with D-Answer</p>
                        <h2 className='text-3xl font-bold'>WELCOME TO e-SHOP</h2>
                        <p className='text-xl mt-2.5 font-bold text-gray-500'>MILLION+ PRODUCTS</p>
                        <button className='bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 
                        transform transition-transform duration-300 hover:scale-105 cursor-pointer'>SHOP NOW</button>
                </div>
            </div>
            
        </div>
    <InfoSection/>
    <CategorySection/>

    <div className='container mx-auto py-12'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
            {products.products.slice(0,5).map(((product)=>(
                <ProductCard product={product}/>
            )))}
        </div>
    </div>
    <Shop/>
    </div>
 </div>
    
  )
}

export default Home