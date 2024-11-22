import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='sour-gummy-font'>
            <NavBar></NavBar>
            <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default MainLayout;