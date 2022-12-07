import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IntroFunctionalCompo from './01IntroFunctionalCompo.jsx';
import StateFunctionalCompo from './02StateFunctionalCompo.jsx';
import APIFunctionalCompo from './03APIFunctionalCompo.jsx';
import UseEffectFunctionalCompo from './04useEffectVsLayoutEffect';
import UseContextFunctionalCompo from './05UseContextFunctionalCompo.jsx';
import FromStateBinding from './06FromStateBinding';
import UseCallBackExample from './07UseCallBackExample.jsx';
import UseMemoExample from './08UseMemoExample.jsx';
import UseReducerExample from './09useReducerExample';
const FunctionalCompoRouter = () => {
    // console.log("called");
    return (
        <>
            <Routes>
                <Route path="/" element={<IntroFunctionalCompo />} >
                    <Route path="stateinfunctional" element={<StateFunctionalCompo />} ></Route>
                    <Route path="apiinfunctional" element={<APIFunctionalCompo />} ></Route>
                    <Route path="useeffectinfunctional" element={<UseEffectFunctionalCompo />} ></Route>
                    <Route path="usecontextinfunctional" element={<UseContextFunctionalCompo />} ></Route>
                    <Route path="statebinding" element={<FromStateBinding />} ></Route>
                    <Route path="usecallback" element={<UseCallBackExample />} ></Route>
                    <Route path="usememo" element={<UseMemoExample />} ></Route>
                    <Route path="usereducer" element={<UseReducerExample />} ></Route>
                </Route>
            </Routes>
        </>
    );
};

export default FunctionalCompoRouter;