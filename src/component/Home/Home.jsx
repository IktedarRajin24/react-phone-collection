/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <p className='text-center'>
            {navigation.state ==='loading' ? "Loading" : ""}
            </p>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;