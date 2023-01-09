import React from 'react';
import { MDBCard, MDBCardBody, MDBRow, MDBCol } from 'mdbreact';

const AdminProducts = () => {
  return (
    <>
      <MDBRow className="mb-4">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <div className="row">
                <div className="col">
                  <input type="text" name="product_title" id="product_title" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input type="text" name="product_description" id="product_description" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input type="text" name="product_title" id="product_title" />
                </div>
              </div>


            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

    </>
  );
};

export default AdminProducts;