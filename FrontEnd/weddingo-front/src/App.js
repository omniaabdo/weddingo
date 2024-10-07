import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
// import Home from "./Components/Home";
import VendorManager from "./Components/VendorManager";
import Checklist from "./Components/Checklist"; // Ensure this path is correct
import Budget from "./Components/Budget";
// import Services from "./Components/Services";
import ServiceDetail from "./Components/ServiceDetail";

import Header from "./Components/Header";
import HomeHeader from "./Components/HomeHeader";

import Footer from "./Components/Footer";
import HomeFooter from "./Components/HomeFooter";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Regester";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SingleServices from "./pages/SingleServices";
import SingleServicesDetails from "./pages/SingleServicesDetails";
import Profile from "./Components/Profile";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname == "/login" ? (
        <Header />
      ) : pathname == "/register" ? (
        <Header />
      ) : (
        <HomeHeader />
      )}

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<SingleServices />} />
        <Route
          path="/services/service-detail"
          element={<SingleServicesDetails />}
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/vendor-manager" element={<VendorManager />} />
        <Route path="/profile/checklist" element={<Checklist />} />
        <Route path="/profile/budget" element={<Budget />} />
      </Routes>
      {pathname == "/login" ? (
        <Footer />
      ) : pathname == "/register" ? (
        <Footer />
      ) : (
        <HomeFooter />
      )}
    </>
  );
}

export default App;
