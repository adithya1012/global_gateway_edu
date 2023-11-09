import "./App.css";
import HomeBody from "./components/homeBody";
import UniversityListBody from "./components/universityListBody";
import LoginBody from "./components/loginPage";
import GreService from "./components/greService";
import CustomNavbar from "./components/navbar";
import Footer from "./components/footer";
import Events from "./components/events";
import Alumni from "./components/Alumni";
import Finance from "./components/Finance";
import Users from "./components/users";
import Recommendation from "./components/recommendation";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <CustomNavbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomeBody />} />
          <Route path="/universityList" element={<UniversityListBody />} />
          <Route path="/login" element={<LoginBody />} />
          <Route path="/greService" element={<GreService />} />
          <Route path="/events" element={<Events />} />
          <Route path="/Alumni" element={<Alumni />} />
          <Route path="/Finance" element={<Finance />} />
          <Route path="/recom" element={<Recommendation />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
export default App;
