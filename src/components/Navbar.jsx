import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-white shadow-md'>
        <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
            <div className='text-lg font-bold'>
                <Link to='/'>my-e-SHOP</Link>
            </div>
            <div className='relative flex-1 mx-4'>
                <form>
                    <input type="text" placeholder='Search Products' className='border rounded w-full py-2 px-4' />
                    <FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
                </form>
            </div>
            <div className='items-center flex space-x-4'>
                <Link to='/cart'>
                 <FaShoppingCart className='text-lg'/>
                </Link>
                <button className='hidden md:block'>Login | Register</button>
                <button className='block md:hidden'><FaUser/></button>
            </div>
        </div>
        <div className='flex justify-center space-x-10 py-4 text-sm font-bold'>
            <Link to='/' className='hover:underline'> Home</Link>
            <Link to='/shop' className='hover:underline'> Shop</Link>
            <Link to='/' className='hover:underline'> Contact</Link>
            <Link to='/' className='hover:underline'> About</Link>
        </div>
    </nav>
  )
}

export default Navbar