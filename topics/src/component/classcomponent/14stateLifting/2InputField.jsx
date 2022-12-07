import React, { Component } from 'react';

class InputField extends Component {
    handleChange = (e) =>{
        console.log("InputField handleChange",e.target.value);
        this.props.parentMethod(e.target.value);
    }
    render() {
        return (
            <>
              <input onChange={this.handleChange}/>  
            </>
        );
    }
}

export default InputField;