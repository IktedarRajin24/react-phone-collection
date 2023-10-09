/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';

const Home = () => {
    const navigation = useNavigation();
    const date = new Date();
    let hours = date.getHours();
    let message;
    if(hours >= 6 && hours <12){
        message = "Good Morning!!"
    }else if(hours >= 12 && hours <4){
        message = "Good Afternoon!!"
    }else if(hours >= 4 && hours <9){
        message = "Good Evening!!"
    }else{
        message = "Hello!!"
    }

    return (
        <div>
            <Header></Header>
            <p className='text-center'>
            {navigation.state ==='loading' ? "Loading" : ""}
            </p>
            <h1 className='text-2xl p-5 font-bold'>
                <span className='text-red-400'>{message}</span> User.
            </h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;