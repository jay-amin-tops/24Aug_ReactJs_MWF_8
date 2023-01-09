import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBBreadcrumb, MDBBreadcrumbItem, MDBFormInline, MDBBtn } from 'mdbreact';

const BreadcrumSection = () => {
  return (
    <MDBCard className="mb-5">
        <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
            <MDBBreadcrumb>
                <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>Dashboard</MDBBreadcrumbItem>
            </MDBBreadcrumb>
            <div className="md-form m-0">
                <input className="form-control form-control-sm" type="search" placeholder="Type your query" aria-label="Search"/>
                {/* <button size="sm" color="primary" className="my-0" type="submit"><MDBIcon icon="search" /></button> */}
            </div>
        </MDBCardBody>
    </MDBCard>
  )
}

export default BreadcrumSection;

