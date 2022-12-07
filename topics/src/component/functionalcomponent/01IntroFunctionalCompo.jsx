import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const IntroFunctionalCompo = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-4 offset-md-8">
                    <ul>
                        <li><Link to="stateinfunctional">State</Link></li>
                        <li><Link to="apiinfunctional">API</Link></li>
                        <li><Link to="useeffectinfunctional">UseEffect</Link></li>
                        <li><Link to="usecontextinfunctional">UseContext</Link></li>
                        <li><Link to="statebinding">StateBinding input Form</Link></li>
                        <li><Link to="usecallback">useCallback</Link></li>
                        <li><Link to="usememo">useMemo</Link></li>
                        <li><Link to="usereducer">useReducer</Link></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default IntroFunctionalCompo;