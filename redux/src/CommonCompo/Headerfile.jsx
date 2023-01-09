import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function App() {
  const MenuData = { "/": "Home", "/about": "About Us", "/contact": "Contact Us", "/login": "SignIn","api-example":"API Example","accessstoredata":"Redux Store Data"  }
  const MenuDataList = Object.entries(MenuData).map(([ky, val], i) => {
    // console.log("Key is",ky,"Values is: ",val);
    return <li className="nav-item" key={i}>
      <Link className="nav-link" to={ky}>{val}</Link>
      {/* <a  aria-current="page" href={ky}>{val}</a> */}
    </li>
  })
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {MenuDataList}
          </ul>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}