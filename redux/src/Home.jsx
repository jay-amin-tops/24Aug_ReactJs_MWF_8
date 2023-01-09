import React from 'react';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { retriveUsers } from './actions/users';
import Headerfile from './CommonCompo/Headerfile';

const Home = () => {
    const dispatch = useDispatch();
    useLayoutEffect(()=>{
        let data = getUsers()
        // console.log(data);
    })
    async function getUsers() {
        return await dispatch(retriveUsers())
    }
    return (
        <div>
            <Headerfile/>
            home page data

        </div>
    );
};

export default Home;