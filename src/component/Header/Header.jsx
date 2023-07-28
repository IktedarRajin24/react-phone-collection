/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [state, setState] = useState(false);
    return (
        <nav className='bg-purple-400 p-4'>
            <div onClick={()=>setState(!state)} className='md:hidden'>
                {
                    state? <XMarkIcon className="h-8 w-8 text-purple-900"></XMarkIcon>:<Bars3Icon className="h-8 w-8 text-purple-900"></Bars3Icon>
                }

            </div>
            <ul className={`flex md:flex-row md:justify-end  bg-purple-400 flex-col opacity-75 h-9/12 w-full text-white absolute md:static ${state? 'top-10':'-top-96'}`}>
                <ActiveLink to='/' >Home</ActiveLink>
                <ActiveLink to='/phones' className='ms-4 p-4 hover:bg-purple-600'>Phones</ActiveLink>
                <ActiveLink to='/about' className='ms-4 p-4 hover:bg-purple-600'>About us</ActiveLink>
                <ActiveLink to='/contact' className='ms-4 p-4 hover:bg-purple-600'>Contact</ActiveLink>
            </ul>
            


        </nav>
    );
};

export default Header;