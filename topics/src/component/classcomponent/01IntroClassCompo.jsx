
import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class IntroClassCompo extends Component {
    
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <ul>
                            <li><Link to="constructor">Construct</Link></li>
                            <li><Link to="stateinclass">State</Link></li>
                            <li><Link to="propsinclass">Props</Link></li>
                            <li><Link to="lifecycleinclass">Lifecycle</Link></li>
                            <li><Link to="jsxexample">jsx</Link></li>
                            <li><Link to="conditionalrendering">Conditional Rendering</Link></li>
                            <li><Link to="controlledcompo">Controlled Component</Link></li>
                            <li><Link to="uncontrolledcompo">Uncontrolled Component</Link></li>
                            <li><Link to="spreadvsrest">Spread Vs Rest Op</Link></li>
                            <li><Link to="compositonvsinheritance">Compositon vs Inheritance</Link></li>
                            <li><Link to="arrayexample">ArrayExample</Link></li>
                            <li><Link to="cssexample">CSSExample</Link></li>
                            <li><Link to="stateliftingexample">State Lifting</Link></li>
                            <li><Link to="hocexample">hoc example</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        );
    }
}

export default IntroClassCompo;