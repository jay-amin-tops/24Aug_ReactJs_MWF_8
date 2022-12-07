import React, { Component } from 'react';

class UnControlledCompo extends Component {
    constructor(props) {
        super(props);
        this.input =React.createRef();
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.input);
        console.log(this.input.current);
        console.log(this.input.current.value);
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">

                        <div className="col">
                            <p> In most cases, we recommend using controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.</p>

                            <p> To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.</p>

                            <p> For example, this code accepts a single name in an uncontrolled component:</p>
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Name:
                                    <input type="text" ref={ this.input} />
                                </label>
                                <input type="submit" value="Submit" />
                                {JSON.stringify(this.input)}
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default UnControlledCompo;