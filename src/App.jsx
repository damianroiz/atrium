import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import { Route, Routes } from "react-router-dom";
import Appointment from "./Pages/Appointment/Appointment";
import Services from "./Pages/Services/Services";
import Blog from "./Pages/Blog/Blog";
import CovidAlert from "./Pages/CovidAlert/CovidAlert";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Covid19" element={<CovidAlert />} />
        <Route path="/Appointment" element={<Appointment />} />
      </Routes>
    </div>
  );
}
