import React from 'react'

const FindJobCard = ({bgColor ='bg-slate-100',
     title ='For Developers',
    subTitle ='Browse our React jobs and start your career today',
      buttonText ='Browse Jobs',
        buttonColor ='bg-gray-800',
        href,
        buttonTextColor}) => {
  return (
    <div className={`p-8 ${bgColor} mx-2 my-4 rounded-lg shadow-md`}>
        <div className='text-2xl font-bold'>{title}</div>
        <div className='mb-8 mt-2'>{subTitle}</div>
        <a href={href}
            className={`px-4 py-3 rounded text-white  ${buttonColor} ${buttonTextColor}` }>
            {buttonText}</a>
   
    </div>
  )
}

export default FindJobCard