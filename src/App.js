import "./App.css";
import Navbar from "./components/navbar";
import HomeBody from "./components/homeBody";
import Alumni from "./components/Alumni";
import Finance from "./components/Finance";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
     <Route path="/Alumni" element={<Alumni />} />
     <Route path="/" element={<HomeBody />} />
     <Route path="/Finance" element={<Finance />} />
      </Routes>
      </Router>

    </div>
  );
}

export default App;
