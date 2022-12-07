import React from 'react';
import HeaderFile from './headerfile';
import { Outlet } from 'react-router-dom';


const MainPage = () => {
  return (
    <>
      <HeaderFile/>
      <div className="container">
        <Outlet/>
      </div>
      {/* Footer */}
    </>
  );
};

export default MainPage;