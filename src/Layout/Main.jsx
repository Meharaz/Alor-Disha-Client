import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/Shared/NavBar/NavBar';
import Footer from '../Components/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;