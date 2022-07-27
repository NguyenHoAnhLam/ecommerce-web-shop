import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import ScrollButton from './ScrollButton';
import ProductViewModal from './ProductViewModal';

import PublicRoutes from '../routes/PublicRoutes';

const Layout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="*"
                    element={
                        <>
                            <Header />
                            <div className="container">
                                <div className="main">
                                    <PublicRoutes />
                                </div>
                            </div>
                            <ScrollButton />
                            <Footer />
                            <ProductViewModal />
                        </>
                    }
                ></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Layout;
