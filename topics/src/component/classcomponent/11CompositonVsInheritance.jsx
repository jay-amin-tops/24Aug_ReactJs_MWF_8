import React, { Component } from 'react';
// import CompositonVsInheritance,{DialogAnything} from 'filename';

class CompositonVsInheritance extends Component {
    render() {
        return (
            <>
                 <div className="container">
                    <div className="row">
                        <div className="col">
                            <p> React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.</p>

                            <p> In this section, we will consider a few problems where developers new to React often reach for inheritance, and show how we can solve them with composition.</p>
                        </div>
                    </div>
                </div>

                <DialogAnything title="Mars Exploration Program" message="How should we refer to you?">
                
                test

                </DialogAnything>
            </>
        );
    }
}
 function DialogAnything(props) {
    console.log(props);
    return <div style={{border:"1px solid"}}>
        {props.title}
        <p>

        {props.children}
        </p>
    </div>
}

export default CompositonVsInheritance;