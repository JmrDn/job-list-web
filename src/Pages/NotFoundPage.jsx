import React from 'react'
import { FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  
  return (
    <div >
      <div className='flex flex-col container items-center justify-center mx-auto'>
        <FaExclamationTriangle className='text-[150px] text-yellow-400 mt-12 '/>
        <h1 className='text-6xl my-4 font-semibold'>404 Not Found</h1>
        <p>This page does not exist</p>
        <div className='flex items-center my-4 hover:text-yellow-400'>
            <FaArrowLeft/>
            <Link className='ml-2' to='/'>
            Go back</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
