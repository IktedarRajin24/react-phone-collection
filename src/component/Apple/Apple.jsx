/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Phone from '../Phone/Phone';

const Apple = () => {
    const phones = useLoaderData();
    return (
        <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
            {
                phones.data.map(phone => <Phone key={phone.slug} phone={phone}></Phone>)
            }
            
        </div>
    );
};

export default Apple;