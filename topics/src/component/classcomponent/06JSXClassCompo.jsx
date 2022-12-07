import React, { Component } from 'react';

class JSXClassCompo extends Component {
    render() {
        const element = <h1>Hello, world!</h1>;
        return (
            <>
            <div>element {element}</div>
            2+2 = {2+2}
            </>
        );
    }
}

export default JSXClassCompo;