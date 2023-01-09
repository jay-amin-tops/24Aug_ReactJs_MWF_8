import React, { useEffect, useState } from 'react';
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBCardHeader, MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';

const AdminAllUsers = () => {
    const [formData, setFormData] = useState({});
    const [data, setData] = useState({});
    const [loadingStatus, setLoadingStatus] = useState(false);
    const [deleteStatus, setDeleteStatus] = useState(false);
    const [userDataById, setUserDataById] = useState({});
    useEffect(() => {
        fetch("https://justjayapi.000webhostapp.com/allusers").then(response => response.json()).then((result) => {
            console.log(result);
            setData(result.Data)
            setLoadingStatus(true)
        })
    }, [deleteStatus])
    let editdata = (event) => { 
        // console.log(event);
        let id = event.target.dataset.tag;
        // console.log(tag); // should return Tagvalue
        fetch(`https://justjayapi.000webhostapp.com/userdatabyidgetmethod?id=${id}`).then(response => response.json()).then((result) => {
            console.log(result.Data[0]);
            // setUserDataById(result.Data[0])
            setFormData(result.Data[0])
        })
     }
    let updatedata = (event) => { 
        let id = event.target.dataset.tag;
        fetch(`https://justjayapi.000webhostapp.com/updateusergetmethod?id=${id}`).then(response => response.json()).then((result) => {
            console.log(result);
        })
     }
    let deletedata = (event) => { console.log("deletedata",event); 
        console.log(event.target.value);
        fetch(`https://justjayapi.000webhostapp.com/deleteusergetmethod?id=${event.target.value}`).then(response => response.json()).then((result) => {
            console.log(result);
            setData(result.Data)
            setDeleteStatus(true)
        })
    }
    return (
        <>
            <MDBRow className="mb-4">
                <MDBCol md="12">
                    <MDBCard>
                        <MDBCardHeader>
                            <MDBRow end>
                                <MDBCol md="2">
                                    <Link className='btn btn-sm btn-primary' to="/admin/addnewuser">Add new</Link>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardHeader>

                        <MDBCardBody>
                            <MDBRow>
                                {JSON.stringify(formData)}
                                <MDBCol md="2">
                                    <input type="text" onChange={(event) => setFormData({ ...formData, [event.target.name]: event.target.value })} value={formData.username} name="username" id="username" />
                                </MDBCol>
                            </MDBRow>

                            <table className='table table-bordered table-striped'>
                                <thead className='bg-dark text-light'>
                                    <tr>
                                        <th>User Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        loadingStatus ?
                                            Object.entries(data).map((val, key) => {
                                                return <tr key={key}>
                                                    <td>{val[1].username}</td>
                                                    <td>{val[1].email}</td>
                                                    <td>{val[1].mobile}</td>
                                                    <td width="220px">
                                                        {/* <button className='btn btn-sm btn-info' ><MDBIcon icon='pen' onClick={editdata} value="a" data-tag="abc" /></button> */}
                                                        <Link to={`/admin/users/`+val[1].id}>edit</Link>
                                                        <button className='btn btn-sm btn-info' ><MDBIcon icon='pen' onClick={editdata} value="a" data-tag={val[1].id} /></button>
                                                        <button className='btn btn-sm btn-danger' value={val[1].id} onClick={deletedata}><MDBIcon icon='trash' />{val[1].id} </button>
                                                    </td>
                                                </tr>
                                            }) : "Loading..."
                                    }

                                </tbody>
                            </table>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>

        </>
    );
};

export default AdminAllUsers;