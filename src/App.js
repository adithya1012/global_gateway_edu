import "./App.css";
import HomeBody from "./components/homeBody";

import UniversityListBody from "./components/universityListBody";
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
