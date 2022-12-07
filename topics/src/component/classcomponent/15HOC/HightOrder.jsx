import React, { Component } from 'react';
const EnhancedComponent =(OriginalComponent)=>{
    class NewComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = { count: 0 }; 
        }
        handleClick = () => {
            // Incrementing the count
            // console.log("called");
            this.setState({ count: this.state.count + 1 }); 
        }
        render() {
            return <OriginalComponent
                handleclick={this.handleClick} 
                show={this.state.count} /> 
        }
    }
    return NewComponent 
}
export default EnhancedComponent 


// class EnhancedComponent extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

// export default EnhancedComponent;