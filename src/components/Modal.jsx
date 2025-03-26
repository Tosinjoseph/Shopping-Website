import React from 'react'

const Modal = ({isModalOpen, setIsModalOpen,children, isModelOpen, setIsModelOpen}) => {
  if(!isModalOpen) return null;
  return (
    <div className='fixed inset-0 bg-gray-800 opacity-75 flex items-center justify-center z-50'>
        <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md'>
           <button className='absolute text-white top-4 right-4 textgray-300 text-3xl' onClick={()=>setIsModalOpen(false)}>&times;</button>   
           {children}    
        </div>
    </div>
  )
}

export default Modal