// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CustomNavbar from './components/navbar';
import HomeBody from './components/homeBody';
import UniversityListBody from './components/universityListBody';
import LoginBody from './components/loginPage';
import GreService from './components/greService';
import Footer from './components/footer';
import Events from './components/events';
import Alumni from './components/Alumni';
import Finance from './components/Finance';
import Recommendation from './components/recommendation';
import SOP from './components/SOP';
import LorService from './components/lorService';
import Resume from './components/Resume';
import Visaprep from "./components/Visaprep";
import { isAuthenticated } from './auth';
  

const PrivateRoute = ({ element, path }) => {
  return isAuthenticated() ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: path }} />
  );
};

const App = () => {
  return (
    <>
      <CustomNavbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomeBody />} />
          <Route path="/universityList" element={<PrivateRoute element={<UniversityListBody />} path="/universityList" />} />
          <Route path="/login" element={<LoginBody />} />
          <Route path="/greService" element={<PrivateRoute element={<GreService />} path="/greService" />} />
          {/* Other routes */}
          <Route path="/events" element={<Events />} />
          <Route path="/Alumni" element={<Alumni />} />
          <Route path="/Finance" element={<Finance />} />
          <Route path="/recom" element={<Recommendation />} />
          <Route path="/SOP" element={<SOP />} />
          <Route path="/lorService" element={<LorService />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Visaprep" element={<Visaprep/>}/>
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
