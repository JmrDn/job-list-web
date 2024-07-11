import React from 'react';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { useLoaderData,useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TabTitle } from '../util/TabTitle';





const JobPage = ({deleteJob, documentTitle}) => {
       
    TabTitle('JobPage')
    const job = useLoaderData();
    const navigate = useNavigate();

    const submitDeleteJob = (e) =>{
        e.preventDefault();

        const confirm = window.confirm('Are you sure you want to delete?');

        if (!confirm) return;

        deleteJob(job.id);

        return navigate('/jobs')
    }

    return (
        <>
            <section className='bg-white'>
                <div className='container mx-auto py-6 text-lg text-gray-700 hover:text-yellow-400  cursor-pointer duration0 ease-in-out'>
                    <Link
                        to='/jobs'
                        className=' flex items-center'>
                        <FaArrowLeft className='mr-4' />
                        <span>Back to Jobs</span>
                    </Link>
                </div>
            </section>
            <section className='bg-indigo-50 p-10'>
                <div className='grid grid-cols-70/30 container mx-auto'>
                    <main>
                        <div className=''>
                            <div className='bg-white p-6 rounded shadow-md'>
                                <h2 className='text-gray-500 text-md'>{job.type}</h2>
                                <h1 className='text-bold text-3xl font-bold my-3'>{job.title}</h1>
                                <div className='flex text-lg text-red-700 items-center'>
                                    <FaMapMarker className='mr-2 ' />
                                    <h2 className=''>{job.location}</h2>
                                </div>
                            </div>


                        </div>

                        <div className="container mx-auto mt-4">
                            <div className='bg-white p-6 rounded shadow-md'>
                                <h1 className='text-yellow-500 font-semibold text-lg mb-4'>Job Description</h1>
                                <p>{job.description}</p>
                                <h1 className='text-yellow-500 font-semibold text-lg my-4'>Salary</h1>
                                <p>{job.salary} / Year</p>
                            </div>
                        </div>
                    </main>

                    <aside >
                        <div className='bg-white p-6 shadow-md rounded ml-4'>
                            <h1 className='text-yellow-500 font-semibold text-lg mb-4'>Company Info</h1>
                            <h1 className=' text-2xl mb-4'>{job.company.name}</h1>
                            <p className='mb-4'>{job.company.description}</p>
                            <div className='h-[1px] container px-4 bg-gray-300'></div>
                            <h1 className=' font-semibold text-lg my-4'>Contact Email</h1>
                            <p className='p-3 bg-yellow-100 text-black'>{job.company.contactEmail}</p>
                            <h1 className=' font-semibold text-lg my-4'>Contact Phone</h1>
                            <p className='p-3 bg-yellow-100 text-black'>{job.company.contactPhone}</p>
                        </div>

                        <div className='bg-white p-6 shadow-md rounded ml-4 my-4'>
                            <h1 className='text-black font-semibold text-lg mb-4'>Manage Job</h1>
                            <Link className=' container mx-auto p-3 bg-indigo-400 flex justify-center text-white font-semibold rounded-full mb-4'
                                to={`/jobs/${job.id}/update-job`}>
                                <span>Update Job</span>
                            </Link>
                            <button className=' container mx-auto p-3 bg-red-400 flex justify-center text-white font-semibold rounded-full'
                                onClick={submitDeleteJob}>
                                <span>Delete Job</span>
                            </button>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    )
}

const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export { JobPage as default, jobLoader }
