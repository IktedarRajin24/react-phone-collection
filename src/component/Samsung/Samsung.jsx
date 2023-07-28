/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Phone from '../Phone/Phone';
const Samsung = () => {
    const phones = useLoaderData();
    // console.log(phones.data);
    return (
        <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
            {
                phones.data.map(phone => <Phone key={phone.slug} phone={phone}></Phone>)
            }
            
        </div>
    );
};

export default Samsung;