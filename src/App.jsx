import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import AppLayout from './Components/AppLayout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Blog from './Pages/Blog/Blog';
import Faqs from './Pages/Faqs/Faqs';
import Appointment from './Pages/Appointment/Appointment';
import './styles.css';
import '../src/Components/components.css';

// dashboard routes
// import Dashboard from './Pages/Dashboard/Dashbaord';
// import Account from './Pages/Dashboard/Account';
// import Login from './Pages/Dashboard/Login';
// import PageNotFound from './Pages/Dashboard/PageNotFound';
// import Posts from './Pages/Dashboard/Posts';
// import Users from './Pages/Dashboard/Users';
// import Settings from './Pages/Dashboard/Settings';
import DashboardRoutes from './Routes/DashboardRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* navigate to home page if no path is provided */}
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="blog" element={<Blog />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="appointment" element={<Appointment />} />
        </Route>
        <Route path="/*" element={<DashboardRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}
