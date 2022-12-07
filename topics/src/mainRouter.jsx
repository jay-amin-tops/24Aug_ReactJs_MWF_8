import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './component/01MainPage';
import AboutCompo from './component/Aboutus.jsx';
import ContactCompo from './component/Contact.jsx';
import ExampleCompo from './component/02ExampleCompo.jsx';
const MainRouter = () => {
    const FunctionalCompoLazy = React.lazy(() =>  { return import("./component/functionalcomponent/functionalRouter")} )
    const ClassCompoLazy = React.lazy(() =>  { return import("./component/classcomponent/classRouter.jsx")} )
    return (
        <>
        {/* checking */}
            <Routes>

                {/* <Route path="/" element={<MainPage />} >
                    <Route path="functionalcompo/*" element={<Suspense fallback={<h1>Loding...</h1>}> <FunctionalCompoLazy /></Suspense>} />
                </Route> */}
                <Route path="/" element={<MainPage />} >
                    {/* <Route path="example" element={<ExampleCompo />} /> */}
                    <Route path="about" element={<AboutCompo />} />
                    <Route path="contact" element={<ContactCompo />} />
                    <Route path="example/*" element={<ExampleCompo />} >
                        <Route path="functionalcompo/*" element={<Suspense fallback={<h1>Loding...</h1>}> <FunctionalCompoLazy /></Suspense>} />
                        <Route path="classcompo/*" element={<Suspense fallback={<h1>Loding...</h1>}> <ClassCompoLazy /></Suspense>} />
                        {/* <Route path="examples" element={<Suspense fallback={<h1>Loding...</h1>}> <FunctionalCompoLazy /></Suspense>} /> */}
                    </Route>
                </Route>
            </Routes>
        </>
    );
};

export default MainRouter;