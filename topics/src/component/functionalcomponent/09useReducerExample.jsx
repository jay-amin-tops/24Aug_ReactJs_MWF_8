import React, { useReducer } from 'react';
import { useState } from 'react';
function init() {
    console.log("init function");
    return {count:0,countfordec:10}
}
function reducer(state,action) {
    switch (action.type) {
        case "increment":
            return {count : state.count+1}
        case "decrement":
            return {countfordec : state.countfordec-1}    
        default:
            break;
    }
}
const UseReducerExample = ({initialCount}) => {
    const [States,setStates] = useState(0)
    const [state,dispatch] = useReducer(reducer,initialCount,init)
    return (
        <>
          <button onClick={()=>{dispatch({type:"increment"})}}>Click  {state.count}</button>  
          <button onClick={()=>{dispatch({type:"decrement"})}}>Click  {state.countfordec}</button>  
        </>
    );
};

export default UseReducerExample;