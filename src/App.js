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
          <Route path="/universityList" element={<UniversityListBody /> } />
          <Route path="/login" element={<LoginBody />} />
          <Route path="/greService" element={<PrivateRoute element={<GreService />} path="/greService" />} />
          <Route path="/events" element={<PrivateRoute element={<Events />} path="/events" />} />
          <Route path="/Alumni" element={<Alumni />} />
          <Route path="/Finance" element={<PrivateRoute element={<Finance />} path="/Finance" />} />
          <Route path="/recom" element={<PrivateRoute element={<Recommendation />} path="/recom" />} />
          <Route path="/SOP" element={<PrivateRoute element={<SOP />} path="/SOP" />} />
          <Route path="/lorService" element={<PrivateRoute element={<LorService />} path="/lorService" />} />
          <Route path="/Resume" element={<PrivateRoute element={<Resume />} path="/Resume" />} />
          <Route path="/Visaprep" element={<PrivateRoute element={<Visaprep/>} path="/Resume" />}/>
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
