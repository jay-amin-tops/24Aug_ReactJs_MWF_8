import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycleinclassClassCompo extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state={data:"soemhting"}
    }
    
    // componentWillMount() {
    //     console.log("componentWillMount");
    // }
    
    componentDidMount() {
        console.log("componentDidMount");
        
    }
    
    // componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps");
    // }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return true;
        // return false;
    }
    
    // componentWillUpdate(nextProps, nextState) {
    //     console.log("componentWillUpdate");
    // }
    
    // componentDidUpdate(prevProps, prevState) {
    //     console.log("componentDidUpdate");
    // }
    
    componentWillUnmount() {
        console.log("componentWillUnmount");
        
    }
    clickHandle=()=>{
        console.log("clicked");
        this.setState({data:"checkin"})
    }
    render() {
        console.log("render");
        return (
            <div>
                Return
                <br />
                <input type="text" name="" id="" />
                {this.state.data}
                <button onClick={this.clickHandle}>Click</button>
            </div>
        );
    }
}

export default LifeCycleinclassClassCompo;