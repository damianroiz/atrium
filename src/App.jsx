import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
<<<<<<< HEAD
=======
import Contact from "./Pages/Contact/Contact";
>>>>>>> d9ad6c81af047deb44f276fe922c6c568e5a16c7
import { Route } from "wouter";
import CovidAlert from "./Pages/CovidAlert/CovidAlert";
import Appointment from "./Pages/Appointment/Appointment";
import Services from "./Pages/Services/Services";

export default function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} />
      <Route path="/About" component={About} />
<<<<<<< HEAD
=======
      <Route path="/Contact" component={Contact} />
>>>>>>> d9ad6c81af047deb44f276fe922c6c568e5a16c7
      <Route path="/Services" component={Services} />
      <Route path="/Covid19" component={CovidAlert} />
      <Route path="/Appointment" component={Appointment} />
    </div>
  );
}

