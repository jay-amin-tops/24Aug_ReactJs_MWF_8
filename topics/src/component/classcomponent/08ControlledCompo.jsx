import React, { Component } from 'react';

class ControlledCompo extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }
    inputData=(anything)=>{
        console.log(anything);
        console.log(anything.target);
        console.log(anything.target.value);
        // this.setState({value:"test"})
        this.setState({value:anything.target.value})
    }
    render() {
        return (
            <div>
               <div className="container">
                    <div className="row">
                        <div className="col">
                            <p>
                                In HTML, form elements such as &lt;input&gt;, &lt;textarea&gt;, and &lt;select&gt; typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().
                            </p>
                            <p>
                                We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a <q>controlled component</q>.
                            </p>

                            <p>
                                For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component:
                            </p>
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Name:
                                    <input type="text" value={this.state.value} onChange={this.inputData} />{this.state.value}
                                </label>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>  
            </div>
        );
    }
}

export default ControlledCompo;