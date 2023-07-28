/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Children } from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "bg-purple-800 ms-4 p-4 " : "hover:bg-purple-600 ms-4 p-4 "
            }
            
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;