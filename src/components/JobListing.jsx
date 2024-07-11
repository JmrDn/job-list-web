import React from 'react'
import { FaMapMarker } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const JobListing = ({jobs}) => {
  const [seeMore, setSeeMore] = useState(true);
  let description = jobs.description.slice(0,90) + '...';
  let textColor = 'text-indigo-400';

  if (!seeMore){
    description = jobs.description;
    textColor = 'text-red-400';
  }
 
  return (
    <div>
    <div className="bg-white rounded-xl shadow-md relative">
                          <div className="p-4">
                              <div className="mb-6">
                                  <div className="text-gray-600 my-2">{jobs.type}</div>
                                  <h3 className="text-xl font-bold">{jobs.title}</h3>
                              </div>

                              <div className="mb-5">
                                  {description}
                              </div>
                              
                              <button className={`${textColor} mb-5`} onClick={()=>setSeeMore((prevState)=> !prevState)}>See {seeMore ? 'more':'less'}</button>
                              <h3 className="text-indigo-500 mb-2">{jobs.salary + ' / Year'}</h3>

                              <div className="border border-gray-100 mb-5"></div>

                              <div className="flex flex-col lg:flex-row justify-between mb-4">
                                  <div className="text-orange-700 mb-3">
                                      <FaMapMarker className='inline text-lg mx-2 mb-2'/>
                                      {jobs.location}
                                  </div>
                                  <Link
                                        to={`/jobs/${jobs.id}`}
                                      className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                                  >
                                      Read More
                                  </Link>
                              </div>
                          </div>
                      </div>
  </div>
  )
}

export default JobListing