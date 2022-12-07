import React from 'react';
import { useState } from 'react';

const APIFunctionalCompo = () => {
    const [data, setData] = useState();
    // fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>{ res.json()}).then() //return must required if we created block scope with {} 
    // fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>{return res.json()}).then()
    fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()).then((response) => {
        console.log(response);
        setData(response)
    })
    // fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>res.json()).then()
    const numbers = [1, 2, 3, 4, 5];
    return (
        <>
            {JSON.stringify(data)}
        </>
    );
};

export default APIFunctionalCompo;


// {
// Object.entries(data).map((v) => {
//     console.log("test");
// })}

// fetch('http://example.com/movies.json')
// .then((response) => response.json())
// .then((data) => console.log(data));

// JavaScript AJAX Calling XMLReq START

// var XMLHttpRequest = new XMLHttpRequest();
// XMLHttpRequest.onreadystatechange = function() {
    //     if (XMLHttpRequest.readyState == XMLHttpRequest.DONE) {
        //         console.log(XMLHttpRequest.responseText);
        //     }
        // }
// XMLHttpRequest.open('GET', 'http://google.com', true);
// XMLHttpRequest.send(null);

// JavaScript AJAX Calling XMLReq END


// jQuery AJAX Calling JSON START
// var request = $.ajax({
    //     type: 'GET',
    //     url: "http://google.com",
//     async: true,
//     success: function() {
//         console.log('sucess');
//     }
// });
// jQuery AJAX Calling JSON END