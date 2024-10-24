import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./users/getUserServices";
import regesterReducer from "./auth/rejester";
import loginReducer from "./auth/login";

//Home Data
import homeReducer from "./home/getHomeData";
import getAllReducer from "./home/getAllData";

//photographer
import photographerReducer from "./photographer/vendorPhotographer";
import singlePhotographerReducer from "./photographer/photgrapherSingleService";
import deletePhotgrapherReducer from "./photographer/deletePhotgrapherService";
import editPhotographerReducer from "./photographer/editPhotographerServices";

// Car Rent
import carRentReducer from "./car-rent/vendorCarRent";
import singleCarRentReducer from "./car-rent/carRentSingleService";
import editCarRentReducer from "./car-rent/editCarRentServices";

// Venue Rent
import venueReducer from "./venue/vendorVenue";
import singleVenueReducer from "./venue/venueSingleService";
import editVenueReducer from "./venue/editVenueServices";

// Location
import locationReducer from "./location/vendorLocation";
import singleLocationReducer from "./location/locationSingleService";
const store = configureStore({
  reducer: {
    homeReducer,
    getAllReducer,
    regesterReducer,
    loginReducer,
    userDataReducer,
    // Photogrpher
    photographerReducer,
    singlePhotographerReducer,
    deletePhotgrapherReducer,
    editPhotographerReducer,

    //car rent
    carRentReducer,
    singleCarRentReducer,
    editCarRentReducer,
    //Venue
    venueReducer,
    singleVenueReducer,
    editVenueReducer,

    //Location
    locationReducer,
    singleLocationReducer,
  },
});

export default store;
