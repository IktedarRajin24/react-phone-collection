/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Phone = ({phone}) => {
    const {phone_name, brand, image} = phone;
    return (
        <div className='p-8 border-2 border-solid border-slate-400 rounded-xl md:w-2/3 mb-2'>
            <img className='mx-auto mb-5' src={image} alt="" />
            <h1 className='md:text-2xl font-bold pb-3'>{phone_name}</h1>
            <p><b>Brand:</b> {brand}</p>
        </div>
    );
};

export default Phone;