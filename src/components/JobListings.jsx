import React from 'react'
import JobListing from './JobListing'
import { useState,useEffect } from 'react'
import Spinner from './Spinner'
import { Link } from 'react-router-dom'

const JobListings = ({isHome = false}) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const displayViewMoreJobs = isHome? 'flex': 'hidden';
    useEffect(()=>{
        const fetchJob = async () =>{
            try{
                const apiURL = isHome? '/api/jobs?_limit=3': '/api/jobs';
                const res = await fetch(apiURL);
                const data = await res.json();
                setJobs(data);
                console.log(data);
            }
            catch(error){
                console.log("Failed to fetch data", error);
            }
            finally{
                setLoading(false);
            }
        }

        fetchJob();
    },[]);
   
    return (
        <div className=' my-6 px-[100px] '>
            <div className='container mx-auto  flex flex-col items-center '>
                <div className='my-4 text-4xl font-bold text-yellow-500'>{isHome? 'Recent Jobs': 'Browse Jobs'}</div>
                {loading? 
                (<Spinner loading={loading}/>):
                (<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {jobs.map((job) =>(
                        <JobListing key={job.id} jobs={job} />
                    ))}
                </div>)}
                <Link to="/jobs" className={`bg-gray-800 px-6 py-4 text-center text-white text-md rounded-md mt-6 ${displayViewMoreJobs}`}>View all Jobs</Link>
            </div>
        </div>
    )
}

export default JobListings