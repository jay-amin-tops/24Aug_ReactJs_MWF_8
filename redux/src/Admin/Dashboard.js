import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminCardSection1 from './pages/sections/AdminCardSection1';
import BreadcrumSection from './pages/sections/BreadcrumSection';
import TableSection from './pages/sections/TableSection';

const Dashboard = () => {
  return (
    <div>
      <BreadcrumSection />
      <AdminCardSection1 />
      {/* <ChartSection1 /> */}
      <TableSection />
      {/* <ChartSection2 /> */}
    </div>
  );
};

export default Dashboard;