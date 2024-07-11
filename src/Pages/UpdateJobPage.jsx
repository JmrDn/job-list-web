import React from 'react'
import { useLoaderData, useParams,useNavigate } from 'react-router-dom'
import { useState } from 'react';

const UpdateJobPage = ({updateJob}) => {
    const job = useLoaderData();
    const {id} = useParams();   
    const navigate = useNavigate();
    

    const [type,setType] = useState(job.type);
    const [title,setTitle] = useState(job.title);
    const [description,setDescription] = useState(job.description);
    const [salary,setSalary] = useState(job.salary);
    const [companyName,setCompanyName] = useState(job.company.name);
    const [location,setLocation] = useState(job.location);
    const [companyDescription,setCompanyDescription] = useState(job.company.description);
    const [companyEmail,setCompanyEmail] = useState(job.company.contactEmail);
    const [companyPhone,setCompanyPhone] = useState(job.company.contactPhone);

    const updateForm = (e) =>{
        e.preventDefault();

        const updatedJob = {
           id,
           type,
           title,
           description,
           salary,
           location,
           company:{
            name:companyName,
            description:companyDescription,
            contactEmail:companyEmail,
            contactPhone:companyPhone,
           },
        };

        updateJob(updatedJob);

        return navigate(`/jobs/${id}`);


    }
  return (
    <section className='bg-indigo-50'>
    <div className=' m-auto max-w-2xl py-24'>
        <div className='bg-white  p-8 rounded-md shadow-md'>

            <form>
                <h1 className='text-3xl font-semibold text-black text-center'>Add Jobs</h1>
                <div className=' w-full text-black flex flex-col mt-4'>
                    <label htmlFor="type"
                        className='my-2'>Job Type</label>
                    <select
                        name="type"
                        id="type"
                        className='border w-full py-2 px-3'
                        value={type}
                        onChange={(e) => setType(e.target.value)}>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Remote">Remote</option>
                        <option value="Internship">Internship</option>
                    </select>
                </div>
                <div className=' w-full text-black flex flex-col mt-4'>
                    <label htmlFor="title"
                        className='my-2'>Job Listing Name</label>
                    <input type="text"
                        name="title"
                        id="title"
                        placeholder='Beautiful Apartment in Miami'
                        className='border w-full px-2 py-3'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className=' w-full text-black flex flex-col mt-4'>
                    <label htmlFor="description"
                        className='my-2'>Description</label>
                    <textarea
                        name="description"
                        id="description"
                        rows='4'
                        placeholder='Add any job duties, expectations, requirements, etc'
                        className='border w-full px-2 py-3'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>

                <div className=' w-full text-black flex flex-col mt-4'>
                    <label htmlFor="salary"
                        className='my-2'>Salary</label>
                    <select
                        name="salary"
                        id="salary"
                        className='border w-full px-2 py-3'
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}>
                        <option value="Under $50K">Under $50K</option>
                        <option value="$50K - 60K">$50K - $60K</option>
                        <option value="$60K - 70K">$60K - $70K</option>
                        <option value="$70K - 80K">$70K - $80K</option>
                        <option value="$80K - 90K">$80K - $90K</option>
                        <option value="$90K - 100K">$90K - $100K</option>
                        <option value="$100K - 125K">$100K - $125K</option>
                        <option value="$125K - 150K">$125K - $150K</option>
                        <option value="$150K - 175K">$150K - $175K</option>
                        <option value="$175K - 200K">$175K - $200K</option>
                        <option value="Over $200K">Over $200K</option>
                    </select>
                </div>

                <div className=' w-full text-black flex flex-col mt-4'>
                    <label htmlFor="location"
                        className='my-2'>Location</label>
                    <input type="text"
                        id='location'
                        name='location'
                        placeholder='Company Location'
                        className='border w-full px-2 py-3'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)} />
                </div>

                <h1 className='text-2xl my-6  text-black text-start'>Company Info</h1>
                <div className=' w-full text-black flex flex-col mt-4'>
                    <label htmlFor="company"
                        className='my-2'>Company name</label>
                    <input type="text"
                        id='company'
                        name='company'
                        placeholder='Company name'
                        className='border w-full px-2 py-3'
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)} />
                </div>
                <div className=' w-full text-black flex flex-col mt-4'>
                    <label htmlFor="company_description"
                        className='my-2'>Company Description</label>

                    <textarea name="company_description" 
                    id="company_description"
                    rows='4'
                    required
                    placeholder='What does your company do?'
                    className='border w-full px-2 py-3'
                    value={companyDescription}
                    onChange={(e) => setCompanyDescription(e.target.value)}></textarea>

                </div>
                <div className=' w-full text-black flex flex-col mt-4'>
                    <label htmlFor="company_email"
                        className='my-2'>Company Email</label>
                    <input type="email"
                        id='company_email'
                        name='company_email'
                        placeholder='Company email'
                        className='border w-full px-2 py-3'
                        value={companyEmail}
                        onChange={(e) => setCompanyEmail(e.target.value)} />
                </div>
                <div className=' w-full text-black flex flex-col mt-4'>
                    <label htmlFor="company_phone"
                        className='my-2'>Company Phone</label>
                    <input type='tel'
                        id='company_phone'
                        name='company_phone'
                        placeholder='Company phone'
                        className='border w-full px-2 py-3'
                        value={companyPhone}
                        onChange={(e) => setCompanyPhone(e.target.value)} />
                </div>
            </form>

            <button onClick={updateForm} className='mx-auto my-4 w-full bg-yellow-400 p-3 rounded-full text-white hover:bg-yellow-500'>Update Job</button>
        </div>
    </div>

</section>
  )
}

export default UpdateJobPage
