import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
