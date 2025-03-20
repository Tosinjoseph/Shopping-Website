import React from 'react'


const categories = [
    {
        title: 'Men',
        imageUrl: './man.png'
    },
    {
        title: 'Women',
        imageUrl: './woman.png'
    },
    {
        title: 'Kids',
        imageUrl: './kid.png'   
    }
]
const CategorySection = () => {
  return (
    <div className='container grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>
        {categories.map((category, i)=>(
            <div key={i} className='relative h-64 transform transition-transform duration-300 hover:scale-105'>
              <img src={category.imageUrl} alt="" className='w-full h-full shadow-md rounded-lg object-cover' />
              <div className='absolute top-20 left-12'>
                <p className='text-xl font-bold'>{category.title}</p>
                <p className='text-gray-600'>View All</p>
              </div>
            </div>
        ))}
    </div>
  )
}

export default CategorySection