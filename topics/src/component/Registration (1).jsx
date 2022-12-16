
import React, { useState } from "react";
import OuterHeader from "./OuterHeader";
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import "./index.css";
const Registration = () => {
  const [formValue, setFormValue] = useState({});
  const savedata=()=>{
    fetch("http://localhost:3001/users",
    {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValue),
    }
    )
      .then((resp) => resp.json())
      .then((responseData) => {
       console.log(responseData);
      });
  }
  // const onChange = (e) => {
  //   setFormValue({ ...formValue, [e.target.name]: e.target.value });
  // };
  return (
    <>
      <OuterHeader />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card border-grey">
              <div className="card-header text-center">Registration</div>
              <div className="card-body">
              <MDBValidation className='row g-3'>
                <MDBValidationItem className='col-md-6'>
                  <MDBInput
                    value={formValue.fname}
                    name='fname'
                    onChange={(event)=>setFormValue({ ...formValue, [event.target.name]: event.target.value })}
                    id='validationCustom01'
                    required
                    label='First name'
                  />
                </MDBValidationItem>
                <MDBValidationItem className='col-md-6'>
                  <MDBInput
                    value={formValue.lname}
                    name='lname'
                    onChange={(event)=>setFormValue({ ...formValue, [event.target.name]: event.target.value })}
                    id='validationCustom02'
                    required
                    label='Last name'
                  />
                </MDBValidationItem>
                <MDBValidationItem className='col-md-12'>
                  <MDBInput
                    value={formValue.email}
                    name='email'
                    onChange={(event)=>setFormValue({ ...formValue, [event.target.name]: event.target.value })}
                    id='validationCustom02'
                    required
                    label='Email'
                  />
                </MDBValidationItem>
                <MDBValidationItem className='col-md-12'>
                  <MDBInput
                    value={formValue.username}
                    name='username'
                    onChange={(event)=>setFormValue({ ...formValue, [event.target.name]: event.target.value })}
                    id='validationCustom02'
                    required
                    label='User Name'
                  />
                </MDBValidationItem>
                <MDBValidationItem className='col-md-12'>
                  <MDBInput
                    value={formValue.mobile}
                    name='mobile'
                    onChange={(event)=>setFormValue({ ...formValue, [event.target.name]: event.target.value })}
                    id='validationCustom02'
                    required
                    label='Mobile Number'
                  />
                </MDBValidationItem>
                <MDBValidationItem className='col-md-12'>
                  <MDBInput
                    type="password"
                    value={formValue.password}
                    name='password'
                    onChange={(event)=>setFormValue({ ...formValue, [event.target.name]: event.target.value })}
                    id='validationCustom02'
                    required
                    label='Password'
                  />
                </MDBValidationItem>
                <div className="row my-2 text-center">
                  <div className="col">
                    <button className="btn btn-primary" onClick={savedata}>Register</button>
                    <button className="btn btn-danger">Cancel</button>
                  </div>
                </div>
                {/* {JSON.stringify(formValue)} */}
               {/* <MDBValidationItem feedback='Please choose a username.' invalid className='col-md-4'>
                  <MDBInputGroup textBefore='@'>
                    <input
                      type='text'
                      className='form-control'
                      id='validationCustomUsername'
                      placeholder='Username'
                      required
                    />
                  </MDBInputGroup>
                </MDBValidationItem> */}
                {/* <MDBInput label='User Name' id='form1' type='text' /> */}
        </MDBValidation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
