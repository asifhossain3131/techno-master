import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from '../components/header&footer/Header';
import Footer from '../components/header&footer/Footer';

const CommonLayout = ({children}) => {
    return (
        <div>
            <Toaster></Toaster>
            <Header></Header>
            <div>
                {children}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CommonLayout;