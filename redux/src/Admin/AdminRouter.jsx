import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import DashboardPage from './pages/DashboardPage';
import AdminProfile from './AdminProfile.jsx';
import AdminProducts from './AdminProducts.jsx';
import AdminAllUsers from './AdminAllUsers.jsx';
import AdminAddNewUser from './AdminAddNewUser.jsx';
import EditUsers from './EditUsers.jsx';
const AdminRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<DashboardPage />} >
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<AdminProfile />} />
                    <Route path="/products" element={<AdminProducts />} />
                    <Route path="/allusers" element={<AdminAllUsers />} />
                    <Route path="/users/:id" element={<EditUsers />} />
                    <Route path="/addnewuser" element={<AdminAddNewUser />} />
                </Route>
            </Routes>
        </>
    );
};

export default AdminRouter;