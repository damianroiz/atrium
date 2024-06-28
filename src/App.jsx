import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import AppLayout from './Components/AppLayout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Blog from './Pages/Blog/Blog';
import Faqs from './Components/Faqs';
import Appointment from './Pages/Appointment/Appointment';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="blog/*" element={<Blog />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="appointment" element={<Appointment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
