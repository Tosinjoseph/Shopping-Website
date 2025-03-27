import React from 'react'

const Register = ({openLogin}) => {
  return (
    <div>
        <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
        <form>
        <div className='mb-4'>
                <label className='block text-gray-700' htmlFor="">Name</label>
                <input type="text" placeholder='Enter Name' className='w-full px-3 py-2 border' />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700' htmlFor="">Email</label>
                <input type="email" className='w-full px-3 py-2 border' />
            </div>
            <div className='mb-4'>
                <label  className='block text-gray-700' htmlFor="">Password</label>
                <input type="password" className='w-full px-3 py-2 border' />
            </div>
            
            <div className='mb-4'>
                <button type='submit' className='w-full bg-red-600 py-2 text-white'>Sign Up</button>
            </div>
        </form>
        <div className='text-center'>
            <span className='text-gray-700'>Already have an account?</span>
            <button className='text-red-800' onClick={openLogin}>Login</button>
        </div>
    </div>
  )
}

export default Register