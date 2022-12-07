import React, { Component } from 'react';
import HightOrder from './HightOrder' 

class EnhancedComponent extends Component {
    render() {
        const { show, handleclick } = this.props
        return (
            <div>
                test
                {/* <EnhancedComponent show="a" handleclick="handleclick"/> */}
                  {/* <button onClick={handleclick}>{show}sdf</button>  */}
                  <button onClick={handleclick}>{show}</button> 
            </div>
        );
    }
}

// export default EnhancedComponentExample;
export default HightOrder(EnhancedComponent);
// export default EnhancedComponent;