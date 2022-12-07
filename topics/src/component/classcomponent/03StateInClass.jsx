import React, { Component } from 'react';

class ConstructorClassCompo extends Component {
    someData = "called";
    constructor(){
        super();
        console.log("called constructor");
        this.state = {data:"something"}
        this.clkfn =this.clkfn.bind(this);    
    }
    clkfn(){
        console.log("clkfn");
        console.log(this.someData);
        return "something"
        // this.someData = "testing"
    }
    clickHandleFunction = ()=>{
        console.log("clkfn");
        console.log(this.someData);
        this.clkfn();
        this.someData = "Testing";
        this.setState({
            data:"new value"
        })
    }
    clkfn1(){
        console.log("clkfn");
    }
    clkfn2(){
        console.log("clkfn");
    }
    clkfn3(){
        console.log("only clkfn3");
    }
    render() {
        console.log("called render");
        const element = <h1>Hello, world!</h1>;
        return (
            <div>
                {this.someData}
                <br />
                {element}
                {/* <button onClick={this.clkfn()}>Click me</button> never called a function with () because it will called function directly */}
                <p>inside class if we are going to build a function we dnst required to specify it with function keyword because of class is a collection of data member and member functions only  </p>
                <button onClick={this.clkfn}>Click me</button>
                <p>this keyword referes ite selfs (Current Object)</p>
                <button onClick={this.clkfn3}>Click me</button> <br />
                <button onClick={this.clickHandleFunction}>Click me without bind with =&gt; </button> <br />
                <br />
                {this.state.data}
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default ConstructorClassCompo;