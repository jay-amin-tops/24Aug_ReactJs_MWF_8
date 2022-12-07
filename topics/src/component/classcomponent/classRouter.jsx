import React from 'react';
import { Routes,Route } from 'react-router-dom';
import IntroClassCompo from './01IntroClassCompo.jsx';
import ConstructorClassCompo from './02ConstructorClassCompo.jsx';
import StateClassCompo from './03StateInClass';
import PropsClassCompo from './04PropsClassCompo.jsx';
import LifeCycleinclassClassCompo from './05LifeCycleinclassClassCompo.jsx';
import JSXClassCompo from './06JSXClassCompo.jsx';
import ConditionalClassExample from './07ConditionalClassExample.jsx';
import ControlledCompo from './08ControlledCompo.jsx';
import UnControlledCompo from './09UnControlledCompo.jsx';
import SpreadVsRestCompo from './10SpreadVsRestCompo.jsx';
import CompositonVsInheritance from './11CompositonVsInheritance.jsx';
import ArrayExample from './12array.jsx';
import CssExample from './13CssExample.jsx';
import MainFile from './14stateLifting/Mainfile';
import HOCExample from './15HOC/EnhancedComponent.jsx';
const ClassCompoRouter = () => {
    // console.log("called");
    return (
        <>
            <Routes>
            <Route path="/" element={<IntroClassCompo />} >
                {/* <Route index element={<IntroClassCompo />} /> */}
                <Route path="constructor" element={<ConstructorClassCompo />} ></Route>
                <Route path="stateinclass" element={<StateClassCompo />} ></Route>
                <Route path="propsinclass" element={<PropsClassCompo />} ></Route>
                <Route path="lifecycleinclass" element={<LifeCycleinclassClassCompo />} ></Route>
                <Route path="jsxexample" element={<JSXClassCompo />} ></Route>
                <Route path="conditionalrendering" element={<ConditionalClassExample />} ></Route>
                <Route path="controlledcompo" element={<ControlledCompo />} ></Route>
                <Route path="uncontrolledcompo" element={<UnControlledCompo />} ></Route>
                <Route path="spreadvsrest" element={<SpreadVsRestCompo />} ></Route>
                <Route path="compositonvsinheritance" element={<CompositonVsInheritance />} ></Route>
                <Route path="arrayexample" element={<ArrayExample />} ></Route>
                <Route path="cssexample" element={<CssExample />} ></Route>
                <Route path="stateliftingexample" element={<MainFile />} ></Route>
                <Route path="hocexample" element={<HOCExample />} ></Route>
            </Route>
                {/* <Route index element={<IntroClassCompo />} >
                </Route> */}
                {/* <Route path="/" element={<IntroFunctionalCompo />} ></Route> */}
            </Routes>
        </>
    );
};

export default ClassCompoRouter;