import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Modal from './Modal.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import { setSearchTerm } from '../redux/productSlice.jsx'



const Navbar = () => {
    const[isModalOpen, setIsModalOpen] = useState(false)
    const[isLogin, setIsLogin] = useState(true)
    const[search, setSearch] = useState()
    const navigate = useNavigate()

    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()
    const openSignUp =()=>{
        setIsLogin(false)
        setIsModalOpen(true)
    }
    const openLogin =()=>{
        setIsLogin(true)
        setIsModalOpen(true)
    }

    const handleSearch =(e)=>{
     e.preventDefault()
     dispatch(setSearchTerm(search))
     navigate('/filter-data')
    }
  return (
    <nav className='bg-white shadow-md'>
        <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
            <div className='text-lg font-bold'>
                <Link to='/'>my-e-SHOP</Link>
            </div>
            <div className='relative flex-1 mx-4'>
                <form onSubmit={handleSearch}>
                    <input type="text" placeholder='Search Products' className='border rounded w-full py-2 px-4' onChange={(e)=>setSearch(e.target.value)} />
                    <FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
                </form>
            </div>
            <div className='items-center flex space-x-4'>
                <Link to='/cart' className='relative'>
                 <FaShoppingCart className='text-lg' />
                 <span className='absolute top-0 text-xs left-3 bg-red-600 rounded-full w-3 h-4 text-white'>{products.length > 0? products.length : <></>}</span>
                </Link>
                <button onClick={()=>setIsModalOpen(true)} className='hidden md:block'>Login | Register</button>
                <button className='block md:hidden'><FaUser/></button>
            </div>
        </div>
        <div className='flex justify-center space-x-10 py-4 text-sm font-bold'>
            <Link to='/' className='hover:underline'> Home</Link>
            <Link to='/shop' className='hover:underline'> Shop</Link>
            <Link to='/' className='hover:underline'> Contact</Link>
            <Link to='/' className='hover:underline'> About</Link>
        </div>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
           {isLogin ? <Login openSignUp={openSignUp}/> : <Register openLogin={openLogin}/>}
        </Modal>
    </nav>
  )
}

export default Navbar