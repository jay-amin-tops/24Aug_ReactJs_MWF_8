import { MDBCol } from 'mdbreact';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditUsers = () => {
    let { id } = useParams();
    const [formData, setFormData] = useState({});

    useEffect(() => {
        // console.log(id);
        // let id = event.target.dataset.tag;
        fetch(`https://justjayapi.000webhostapp.com/userdatabyidgetmethod?id=${id}`).then(response => response.json()).then((result) => {
            setFormData(result.Data[0])
        })
    })
    return (
        <>
            {JSON.stringify(formData)}
            <MDBCol md="2">
                <input type="text" onChange={(event) => setFormData({ ...formData, [event.target.name]: event.target.value })} value={formData.username} name="username" id="username" />
            </MDBCol>
        </>
    );
};

export default EditUsers;