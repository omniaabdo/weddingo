import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
// import Home from "./Components/Home";
import VendorManager from "./Components/VendorManager";
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
import AddVendor from "./Components/AddVendor";
import PhotographerVendor from "./Components/photographer-components/PhotographerVendor";
import PhotographerServiceDetails from "./Components/photographer-components/PhotographerServiceDetails";
import CarRentVendor from "./Components/car-rent-components/CarRentVendor";
import CarRentServiceDetails from "./Components/car-rent-components/CarRentServiceDetails";

function App() {
  const { pathname } = useLocation();
  const [isLogin, setIsLogin] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setIsLogin(user);
  }, []);

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
        <Route
          path="/login"
          element={isLogin ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={isLogin ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/services" element={<SingleServices />} />

        <Route
          path="/services/service-detail"
          element={<SingleServicesDetails />}
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/vendor-manager" element={<VendorManager />} />
        <Route path="/profile/my-services" element={<AddVendor />} />
        <Route
          path="/profile/my-services/photographer"
          element={<PhotographerVendor />}
        />
        <Route
          path="/profile/my-services/photographer/details"
          element={<PhotographerServiceDetails />}
        />
        <Route
          path="/profile/my-services/car"
          element={<CarRentVendor />}
        />
        <Route
          path="/profile/my-services/car/details"
          element={<CarRentServiceDetails />}
        />
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
