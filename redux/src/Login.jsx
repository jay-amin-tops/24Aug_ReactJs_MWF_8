import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CustomHook from './Hook/customHook';
import { useCookies } from 'react-cookie'
import { useNavigate,Link } from "react-router-dom"
import axios from 'axios';
import HeaderFile from './CommonCompo/Headerfile';
import './Login.css';
import { useDispatch } from 'react-redux/es/exports';
import { retriveLoginUsers } from './actions/users';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [data, setData] = useState({});
    const [loadingStatus, setLoadingStatus] = useState(false);
    const [cookies, setCookie] = useCookies(['user']);
    const {handleInputChange,inps,error} = CustomHook({},{usernameError:"",passwordError:""});
    // useEffect(() => {
    // }, [])

    let loginClick = (event)=>{
        event.preventDefault();
        return dispatch(retriveLoginUsers(inps.username,inps.password))
    }
    return (
        <>
        <HeaderFile/>
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="username" value={inps.username} onChange={handleInputChange} required/>
                            <label>Username</label>
                            {/* {JSON.stringify(inps)} */}
                            {/* {JSON.stringify(error.usernameError)} */}
                            <span>{error.usernameError}</span>
                    </div>
                    <div className="user-box">
                        <input type="password" name="password" value={inps.password} onChange={handleInputChange}  required/>
                            <label>Password</label>
                            <span>{error.passwordError}</span>
                    </div>
                    <button onClick={loginClick}>Login</button>
                    {/* <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a> */}
                    <Link to="/registration">Create new account</Link>
                </form>
            </div>
        </>
    );
};

export default Login;