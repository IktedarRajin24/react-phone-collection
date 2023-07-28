/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import Phone from '../Phone/Phone';

const Phones = () => {
    const phones = useLoaderData()
    
    return (
        <div className='mx-auto w-9/12'>
            <nav className='flex gap-4 px-3 mb-10 py-3 '>
                <Link to='/phones/samsung' className='border-solid border-black border-2 p-2 rounded-2xl'>Samsung</Link>
                <Link to='/phones/apple' className='border-solid border-black border-2 p-2 rounded-2xl'>iPhone</Link>
            </nav>
            {/* <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
            {
                phones.map(phone => <Phone key={phone.slug} phone={phone}></Phone>)
            }
            </div> */}
            
            <Outlet>
            
            </Outlet>
        </div>
    );
};

export default Phones;