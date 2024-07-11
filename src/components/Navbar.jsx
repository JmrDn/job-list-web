import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const navLinkClass =({isActive}) =>
        isActive? 'text-gray-800 mx-8 bg-yellow-400 px-4 py-2 rounded':
        'text-white mx-8 hover:text-yellow-400';
    
    return (
        <nav className='bg-gray-800 m-0 p-0'>
            <div className=' mx-auto max-w-7xl px-2 py-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center'>
                    <div>
                        <NavLink to="/" className='text-white text-2xl font-bold'>
                            Jmr.
                            <span className='text-yellow-400'>Dev</span></NavLink>
                    </div>
                    <div className='flex justify-between items-center'>
                        <NavLink to="/" className={navLinkClass}>Home</NavLink>
                        <NavLink to="/jobs" className={navLinkClass}>Jobs</NavLink>
                        <NavLink to="/add-jobs" className={navLinkClass}>Add Job</NavLink>
                        <NavLink to="/football" className={navLinkClass}>API</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;