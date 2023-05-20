import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import { Route } from "wouter";
import CovidAlert from "./Pages/CovidAlert/CovidAlert";
import Appointment from "./Pages/Appointment/Appointment";
import Services from "./Pages/Services/Services";

export default function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Services" component={Services} />
      <Route path="/Covid19" component={CovidAlert} />
      <Route path="/Appointment" component={Appointment} />
    </div>
  );
}

