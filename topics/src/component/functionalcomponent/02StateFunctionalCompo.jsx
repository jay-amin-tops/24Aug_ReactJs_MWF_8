import React from 'react';
import { useState } from 'react';

const StateFunctionalCompo = () => {
    const [count,setCount] = useState();
    const clickData = ()=>{
        console.log("called");
        setCount("test")
        // setCount(count+1)
    }
    return (
        <>
          <button onClick={clickData}>Click</button>  
          {count}
        </>
    );
};

export default StateFunctionalCompo;