import React, { useEffect, useLayoutEffect, useState } from 'react';

const UseEffectVsLayoutEffect = () => {
    const [data, setData] = useState();
    const [status, setStatus] = useState(false);
    // Simple UseEffect START
    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()).then((response) => {
    //         console.log(response);
    //         setData(response)
    //     })
    // })
    // Simple UseEffect END

    // UseEffect with return START (unmount)
    // useEffect(()=>{
    //     return () => {
    //         fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()).then((response) => {
    //             console.log(response);
    //             setData(response)
    //         })
    //     }
    // })
    // UseEffect with return END (unmount)

    // UseEffect Conditional rendering START (unmount)
    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()).then((response) => {
    //         console.log(response);
    //         setData(response)
    //     })
    // },[])
    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()).then((response) => {
    //         console.log(response);
    //         setData(response)
    //     })
    // },[status])
    // UseEffect Conditional rendering END (unmount)

    useLayoutEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()).then((response) => {
            console.log(response);
            setData(response)
        })
    });
    const numbers = [1, 2, 3, 4, 5];
    return (
        <>
            <button onClick={() => { setStatus(!status) }}>Click me {JSON.stringify(status)}</button>
            <br />
            {JSON.stringify(data)}
        </>
    );
};

export default UseEffectVsLayoutEffect;


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