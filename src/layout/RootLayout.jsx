import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
    return (
        <div className='max-w-11/12 mx-auto'>

            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default RootLayout;