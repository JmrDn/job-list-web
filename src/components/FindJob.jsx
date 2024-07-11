import React from 'react'
import FindJobCard from './FindJobCard'

const FindJob = () => {
  return (
    <div className='mx-auto container  grid grid-cols-2 px-2 py-4 sm:px-6 lg:px-[100px]'>
        <FindJobCard/>
        <FindJobCard title='For Employers' 
        subTitle='List your job to find the perfect developer for the role'
        bgColor='bg-yellow-100'
        buttonText='Add Job'
        buttonColor='bg-yellow-400'
        buttonTextColor='text-gray-800'/>
    </div>
  )
}

export default FindJob