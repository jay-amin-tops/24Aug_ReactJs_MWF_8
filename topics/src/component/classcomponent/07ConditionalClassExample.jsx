import React, { Component } from 'react';

class ConditionalClassExample extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedin: false ,data:55}
    }
    loginchange = () => {
        // console.log("called");
        this.setState({ isLoggedin: !this.state.isLoggedin })
    }
    render() {
        let dispData = null
        if (this.state.isLoggedin) {
            if (this.state.data > 50) {
                dispData = <p>Something</p>
            }else{
                dispData = <p>inside else</p>
            }
        }

        return (
            <>
                {dispData}
                {this.state.isLoggedin ?<h2>Loggedin</h2> :<h2>Loggedout</h2>}
                
                {/* <button onClick={this.loginchange()}>Click</button>             */}
                {this.state.isLoggedin.toString()}
                <button onClick={this.loginchange}>Click</button>
            </>
        );



        // if (this.state.isLoggedin) {
        //     return (
        //         <>
        //             <h2>Loggedin</h2>
        //             {/* <button onClick={this.loginchange()}>Click</button>             */}
        //             {this.state.isLoggedin.toString()}
        //             <button onClick={this.loginchange}>Click</button>            
        //         </>
        //     );

        // } else {
        //     return (
        //         <>
        //             <h2>Loggedout</h2>
        //             {/* <button onClick={this.loginchange()}>Click</button>             */}
        //             {this.state.isLoggedin.toString()}
        //             <button onClick={this.loginchange}>Click</button>            
        //         </>
        //     );
        // }
    }
}

export default ConditionalClassExample;