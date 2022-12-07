import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import HeaderCompo from './headerfile';

const ExampleCompo = () => {
    return (
        <>
          {/* <HeaderCompo/> */}
          <h2 className='text-center'>Example Component</h2>
            
          {/* <Link to="/functionalcompo">Functional Component</Link> */}
          <div className="row">
            <div className="col-md-4">
              <Link to="#">Examples Component</Link>
            </div>
            <div className="col-md-4">
              <Link to="classcompo">Class Component</Link>
            </div>
            <div className="col-md-4">
              <Link to="functionalcompo">Functional Component</Link>
            </div>
          </div>
          <Outlet></Outlet>
        </>
    );
};

export default ExampleCompo;