import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import Home from './Home.jsx';
import GetStoreData from './getStoreData';
import LoginCompo from './Login';

const MainRoute = () => {
    // console.log("MainRoute");
    // return false
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/accessstoredata' element={<GetStoreData />} />
                <Route path='/login' element={<LoginCompo />} />
            </Routes>
        </>
    );
};

export default MainRoute;