import React from 'react';
import AdminCardSection1 from './sections/AdminCardSection1';
import AdminCardSection2 from './sections/AdminCardSection2';
import TableSection from './sections/TableSection';
import BreadcrumSection from './sections/BreadcrumSection';
import SideNavigation from '../sideNavigation';
import TopNavigation from '../topNavigation';
import Footer from '../Footer';
// import ChartSection1 from './sections/ChartSection1';
// import ChartSection2 from './sections/ChartSection2';
// import MapSection from './sections/MapSection';
// import ModalSection from './sections/ModalSection';
import '../index.css';
import { Outlet } from 'react-router-dom';
const DashboardPage = () => {
  return (
    <>
      <div className="flexible-content">
        <TopNavigation />
        <SideNavigation />

        <main id="content" className="p-5">
                  <Outlet />
          {/* <BreadcrumSection />
          <AdminCardSection1 /> */}
          {/* <ChartSection1 /> */}
          {/* <TableSection /> */}
          {/* <ChartSection2 /> */}
          {/* <MDBRow className="mb-4">
          </MDBRow> */}
          {/* <MapSection /> */}
          {/* <ModalSection /> */}
          {/* <AdminCardSection2 /> */}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default DashboardPage;