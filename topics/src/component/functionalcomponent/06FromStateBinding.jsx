import React, { useState } from 'react';

const FromStateBinding = () => {
  const [username,setUsername] = useState("");
  const [formData,setFormData] = useState({"MemberBankID": 0,
  "MemberBankBranch": "",
  "MemberBankACNo": "",
  "MemberBankACType": "",
  "MemberBankIFSCCode": "",
  "NomineeName": "",
  "NomineeRelation": ""});
  const registClick=(event)=>{
    console.log(formData);
    event.preventDefault();
    const requestOptions = {
      mode: 'no-cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
  };
    fetch("http://uatbenmoon.malayinfotech.com/api/memberapi/",requestOptions).then(response => response.json()).then((data) => {
      console.log(data);
    })
  }
  return (
    <>
     <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card border-grey">
              <div className="card-body">
                <form method="post">
                 <div className="row mt-3">
                  <div className="col">
                    {/* <input type="text" name="" id="" onChange={(e)=>setUsername(e.target.value)} /> */}
                    <input type="text" name="username" id="" onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} />
                  </div>
                 </div>
                 <div className="row mt-3">
                  <div className="col">
                    {/* <input type="text" name="" id="" onChange={(e)=>setUsername(e.target.value)} /> */}
                    <input type="text" name="password" id="" onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})} />
                  </div>
                 </div>
                 <button onClick={registClick}>Test</button>
                </form>
                {JSON.stringify(formData)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FromStateBinding;