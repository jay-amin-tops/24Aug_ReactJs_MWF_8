import React, { Component } from 'react';
import CardCompo from "./4.1CardCompo.jsx";  
import ImgFile from "./logo192.png";  
class PropsClassCompo extends Component {
    render() {
        return (
            <>
            5+5={5+5}
            <div className="row">
                <div className="col-md-3">
                    <CardCompo imgpath='https://mdbootstrap.com/img/new/standard/nature/184.webp' title = "Testing"/>
                </div>
                <div className="col-md-3">
                    <CardCompo imgpath={ImgFile} title ="New Data"/>
                </div>
                <div className="col-md-3">
                    <CardCompo imgpath={`${process.env.PUBLIC_URL}/images/imsd.png`} title ="New Data"/>
                </div>
                <div className="col-md-3">
                    <CardCompo title ="Something"/>
                </div>
            </div>
            </>
        );
    }
}

export default PropsClassCompo;