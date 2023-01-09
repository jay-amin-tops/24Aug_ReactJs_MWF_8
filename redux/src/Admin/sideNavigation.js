import React from 'react';
import logo from "./assets/mdb-react.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {
    const MenuData = { "dashboard": ["Dashboard","table"], "allusers": ["All Users","users"] }
    const MenuDataList = Object.entries(MenuData).map(([ky, val], i) => {
        // console.log("Key is",ky,"Values is: ",val);
        return <NavLink to={ky} className="" key={i}>
            <MDBListGroupItem>
                <MDBIcon icon={val[1]} className="mr-3" />
                {val[0]}
            </MDBListGroupItem>
        </NavLink>
    })
    return (
        <div className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
                <img alt="MDB React Logo" className="img-fluid" src={logo} />
            </a>
            <MDBListGroup className="list-group-flush">
                {MenuDataList}
                {/* <NavLink to="/" className="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3" />
                        Dashboard
                    </MDBListGroupItem>
                </NavLink> */}
                {/* <NavLink to="/profile" >
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                        Profile
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/tables" >
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        Tables
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/maps" >
                    <MDBListGroupItem>
                        <MDBIcon icon="map" className="mr-3"/>
                        Maps
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/404" >
                    <MDBListGroupItem>
                        <MDBIcon icon="exclamation" className="mr-3"/>
                        404
                    </MDBListGroupItem>
                </NavLink> */}
            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;