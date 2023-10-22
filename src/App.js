import "./App.css";
import HomeBody from "./components/homeBody";
import UniversityListBody from "./components/universityListBody";
import Events from "./components/events";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeBody />} />
          <Route path="/universityList" element={<UniversityListBody />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
