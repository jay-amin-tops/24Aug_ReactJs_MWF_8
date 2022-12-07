import React, { Component } from 'react';

class ConstructorClassCompo extends Component {
    constructor(){
        super();
        console.log("called constructor");
    }
    render() {
        console.log("called render");
        return (
            <div>
                <p>Constructor is a method which is invoked by default when objects are created in reactjs we are never creting an object of any class for then in reactjs constructor invoked by default when compoenent called</p>
            </div>
        );
    }
}

export default ConstructorClassCompo;