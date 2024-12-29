import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Posts from '../Pages/Dashboard/Posts';
import Users from '../Pages/Dashboard/Users';
import Settings from '../Pages/Dashboard/Settings';
import Account from '../Pages/Dashboard/Account';
import Login from '../Pages/Dashboard/Login';
import PageNotFound from '../Pages/Dashboard/PageNotFound';
import Layout from '../Pages/Dashboard/ui/Layout';

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route  element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />}>
          
          <Route index element={<Navigate replace to="/dashboard" />} />
          <Route path="posts" element={<Posts />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}
