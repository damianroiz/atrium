import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from '../Components/AppLayout';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Services from '../Pages/Services/Services';
import Blog from '../Pages/Blog/Blog';
import Faqs from '../Pages/Faqs/Faqs';
import Appointment from '../Pages/Appointment/Appointment';

export default function HomeRoutes() {
  return (
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
    </Routes>
  );
}
