import React, { useState } from 'react';

const CustomHook = (intVal,intError) => {
    const [inps, setInps] = useState(intVal);
    const [error, setError] = useState(intError);
    const handleInputChange=(e)=>{
        setInps((inps)=>({...inps,[e.target.name]:e.target.value}))
        if (e.target.name == "username") {
            if (e.target.value == "") {
                setError({...error,"usernameError":"User Name is required"})
            } else {
                setError({...error,"usernameError":""})
            }        
        } else if (e.target.name == "password") {
            if (e.target.value == "") {
                setError({...error,"passwordError":"Password is required"})
            } else {
                setError({...error,"passwordError":""})
            }        
        }        
        console.log(" CustomHook called",inps);
    }
    // return (
    //     <div>
            
    //     </div>
    // );
    return{
        handleInputChange,
        inps,
        error
    }
};

export default CustomHook;