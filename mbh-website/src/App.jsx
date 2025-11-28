// import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import OurTeam from "./pages/our-team";
import Events from "./pages/events";
import Sponsorship from "./pages/sponsorship";

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* About Us Page */}
        <Route path="/about-us" element={<AboutUs />} />
        {/* Our Team Page */}
        <Route path="/our-team" element={<OurTeam />} />
        {/* Events Page */}
        <Route path="/events" element={<Events />} />
        {/* Sponsors & Partners Page */}
        <Route path="/sponsorship" element={<Sponsorship />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
