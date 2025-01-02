import { Routes, Route, Navigate } from 'react-router-dom';
// import Dashboard from '../Pages/Dashboard/Dashboard';
import Blogs from '../Pages/Dashboard/Blogs';
import Users from '../Pages/Dashboard/Users';
import Settings from '../Pages/Dashboard/Settings';
import Account from '../Pages/Dashboard/Account';
import Login from '../Pages/Dashboard/Login';
import PageNotFound from '../Pages/Dashboard/PageNotFound';
import Layout from '../Pages/Dashboard/ui/Layout';

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Navigate replace to="/dashboard" />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
        <Route path="account" element={<Account />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
