import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
//import NavBar from "./Components/NavBar";
// import Home from "./Components/Home";
import VendorManager from "./Components/VendorManager";
import Budget from "./Components/Budget";
// import Services from "./Components/Services";
//import ServiceDetail from "./Components/ServiceDetail";

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
import VenueVendor from "./Components/Venue-components/VenueVendor";
import BeautyCenter from "./Components/beauty-center-components/BeautyCenter";
import BeautyCenterDetails from "./Components/beauty-center-components/BeautyCenterDetails";
import Store from "./Components/store-components/Store";
import StoreDetails from "./Components/store-components/StoreDetails";
import Category from "./Components/category-components/Category";
import ForgetPasswoed from "./pages/ForgetPasswoed";
import ResetPassword from "./pages/ResetPassword";
import ErrorPage from "./pages/ErrorPage";
import EditProfile from "./Components/EditProfile";
import AdminDashboard from "./Components/AdminDashboard";
import VenueServiceDetails from "./Components/Venue-components/VenueServiceDetails";
import VendorLocation from "./Components/Location-component/VendorLocation";
import LocationServiceDetails from "./Components/Location-component/LocationServiceDetails";

function App() {
  const { pathname } = useLocation();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Function to handle local storage changes
    const updateUserData = () => {
      const user = JSON.parse(localStorage.getItem("userData")); // Adjust the key name to match
      setUserData(user);
    };

    // Initial fetch of user data
    updateUserData();

    // Set up event listener for storage changes
    window.addEventListener("storage", updateUserData);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("storage", updateUserData);
    };
  }, []);

  return (
    <>
      {pathname === "/login" ||
      pathname === "/register" ||
      pathname === "/forget-password" ||
      pathname === "/reset-password" ? (
        <Header />
      ) : (
        <HomeHeader userData={userData?.data} />
      )}

      <Routes>
        <Route path="" element={<Home />} />
        <Route
          path="/login"
          element={userData ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={userData ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/forget-password" element={<ForgetPasswoed />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/services/beauty-center" element={<SingleServices />} />
        <Route path="/services/location" element={<SingleServices />} />
        <Route path="/services/photographer" element={<SingleServices />} />
        <Route path="/services/car-rent" element={<SingleServices />} />
        <Route path="/services/home-store" element={<SingleServices />} />
        <Route path="/services/venue" element={<SingleServices />} />

        <Route
          path="/services/beauty-center/service-detail/:id"
          element={<SingleServicesDetails />}
        />
        <Route
          path="/services/location/service-detail/:id"
          element={<SingleServicesDetails />}
        />
        <Route
          path="/services/photographer/service-detail/:id"
          element={<SingleServicesDetails />}
        />
        <Route
          path="/services/car-rent/service-detail/:id"
          element={<SingleServicesDetails />}
        />
        <Route
          path="/services/home-store/service-detail/:id"
          element={<SingleServicesDetails />}
        />
        <Route
          path="/services/venue/service-detail/:id"
          element={<SingleServicesDetails />}
        />
        <Route
          path="/services/service-detail/:id"
          element={<SingleServicesDetails />}
        />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/profile">
          <Route index element={userData ? <Profile /> : <Navigate to="/" />} />
          <Route
            path="vendor-manager"
            element={userData ? <VendorManager /> : <Navigate to="/" />}
          />

          <Route path={"my-services"}>
            <Route
              index
              element={userData ? <AddVendor /> : <Navigate to="/" />}
            />
            <Route
              path="photographer"
              element={userData ? <PhotographerVendor /> : <Navigate to="/" />}
            />
            <Route
              path="photographer/details/:id"
              element={
                userData ? <PhotographerServiceDetails /> : <Navigate to="/" />
              }
            />

            <Route
              path="car"
              element={userData ? <CarRentVendor /> : <Navigate to="/" />}
            />
            <Route
              path="car/details/:id"
              element={
                userData ? <CarRentServiceDetails /> : <Navigate to="/" />
              }
            />

            <Route
              path="Venues"
              element={userData ? <VenueVendor /> : <Navigate to="/" />}
            />
            <Route
              path="Venues/details/:id"
              element={userData ? <VenueServiceDetails /> : <Navigate to="/" />}
            />

            <Route
              path="Location"
              element={userData ? <VendorLocation /> : <Navigate to="/" />}
            />
            <Route
              path="Location/details/:id"
              element={
                userData ? <LocationServiceDetails /> : <Navigate to="/" />
              }
            />

            <Route
              path="beauty-center"
              element={userData ? <BeautyCenter /> : <Navigate to="/" />}
            />
            <Route
              path="beauty-center/details"
              element={userData ? <BeautyCenterDetails /> : <Navigate to="/" />}
            />
            <Route path="store" element={<Store />} />
            <Route path="store/details" element={<StoreDetails />} />
            <Route path="category" element={<Category />} />
          </Route>

          <Route
            path="budget"
            element={userData ? <Budget /> : <Navigate to="/" />}
          />

          <Route
            path="edit-profile"
            element={userData ? <EditProfile /> : <Navigate to="/" />}
          />
          {/* <Route path="admin" element={<AdminDashboard />} /> */}
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {pathname === "/login" ||
      pathname === "/register" ||
      pathname === "/forget-password" ||
      pathname === "/reset-password" ? (
        <Footer />
      ) : (
        <HomeFooter />
      )}
    </>
  );
}

export default App;

{
  /*
     <Routes>
        <Route path="" element={<Home />} />
        <Route
          path="/login"
          element={userData ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={userData ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/forget-password" element={<ForgetPasswoed />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/services" element={<SingleServices />} />

        <Route
          path="/services/service-detail"
          element={<SingleServicesDetails />}
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit-profile" element={<EditProfile />} />
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

        <Route path="/profile/my-services/car" element={<CarRentVendor />} />
        <Route
          path="/profile/my-services/car/details"
          element={<CarRentServiceDetails />}
        />
        <Route path="/profile/my-services/Venues" element={<VenueForm />} />
        <Route
          path="/profile/my-services/Location"
          element={<LocationForm />}
        />
        <Route
          path="/profile/my-services/beauty-center"
          element={<BeautyCenter />}
        />
        <Route
          path="/profile/my-services/beauty-center/details"
          element={<BeautyCenterDetails />}
        />
        <Route path="/profile/my-services/store" element={<Store />} />
        <Route
          path="/profile/my-services/store/details"
          element={<StoreDetails />}
        />
        <Route path="/profile/my-services/category" element={<Category />} />
        <Route path="/profile/budget" element={<Budget />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
  
  */
}
