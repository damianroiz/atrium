import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import { Route } from "wouter";
import Covid19 from "./Pages/Covid-19/Covid19";
import Appointment from "./Pages/Appointment/Appointment";
import Services from "./Pages/Services/Services";

export default function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Services" component={Services} />
      <Route path="/Covid19" component={Covid19} />
      <Route path="/Appointment" component={Appointment} />
    </div>
  );
}

