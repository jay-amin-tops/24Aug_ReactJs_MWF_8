import React, { useCallback } from 'react';

const UseCallBackExample = () => {
    const clickHandler = useCallback(() => {
        // handle the click event
        console.log("called");
        fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()).then((response) => {
            console.log(response);
        })
    });
    
    // const clickHandler = () => {
    //     // handle the click event
    //     console.log("called clickHandler simple without hook");
    //     fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()).then((response) => {
    //         console.log(response);
    //     })
    // };
    const ButtonWrapper = (({ ClickHandlerCallBkFunc }) => {
        console.log("onClick");
        return <button onClick={ClickHandlerCallBkFunc}>Click me</button>
    })
    return (
        <div>
             <ButtonWrapper ClickHandlerCallBkFunc={clickHandler} />
            <p> The array of dependencies is not passed as arguments to the callback. Conceptually, though, that's what they represent: every value referenced inside the callback should also appear in the dependencies array. In the future, a sufficiently advanced compiler could create this array automatically.</p>

            <p> We recommend using the exhaustive-deps rule as part of our eslint-plugin-react-hooks package. It warns when dependencies are specified incorrectly and suggests a fix.</p>

        </div>
    );
};

export default UseCallBackExample;