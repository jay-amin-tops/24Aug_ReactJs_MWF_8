import React, { Component } from 'react';
import styledComponents from 'styled-components';
import "./custom.css";
class CssExample extends Component {
    render() {
        const custCSS = {
            color: "blue",
            backgroundColor: "orange"
        }
        const Wrapper = styledComponents.section`
                        padding: 4em;
                        background: papayawhip;
                        `;
        const Btn = styledComponents.button`
                        color: green;
                        font-size: 1em;
                        margin: 1em;
                        padding: 0.25em 1em;
                        border: 2px solid palevioletred;
                        border-radius: 3px;
                        `;
        const txtc = {
            color: "blue",
            background: "yellow"
        };
        const txts = {
            fontSize: "80px"
        };
        return (
            <>
            {/* [12,12,21][5,5,5,5,4]
            [[12,12,21][5,5,5,5,4]]
            ARR[0][0]
            [12,12,21,5,5,5,5,4]
            ARR[0] */}
                <p style={custCSS}>test</p>
                <p style={{ color: "blue", backgroundColor: "orange" }}>test</p>
                <h2>Something</h2>
                <Btn>test</Btn>
                <Wrapper>data</Wrapper>
                <h1 style={{ ...txtc, ...txts }}>Hello App</h1>
                <h1 style={{  color: "blue", background: "yellow", fontSize: "80px"  }}>Hello App</h1> 
                {/* <h1 style={{  {color: "blue", background: "yellow"} {fontSize: "80px"}  }}>Hello App</h1>  */}
            </>
        );
    }
}


export default CssExample;