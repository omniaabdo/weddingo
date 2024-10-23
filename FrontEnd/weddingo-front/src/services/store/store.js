import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./users/getUserServices";
import regesterReducer from "./auth/rejester";
import loginReducer from "./auth/login";

//photographer
import photographerReducer from "./photographer/vendorPhotographer";
import singlePhotographerReducer from "./photographer/photgrapherSingleService";
import deletePhotgrapherReducer from "./photographer/deletePhotgrapherService";

// Car Rent
import carRentReducer from "./car-rent/vendorCarRent";
import singleCarRentReducer from "./car-rent/carRentSingleService";

// Venue Rent
import venueReducer from "./venue/vendorVenue";
import singleVenueReducer from "./venue/venueSingleService";

// Venue Rent
import locationReducer from "./location/vendorLocation";
import singleLocationReducer from "./location/locationSingleService";
import singleHomeStoreCategoryDataReducer from "./store-category/storeCategoryService";
const store = configureStore({
  reducer: {
    regesterReducer,
    loginReducer,
    userDataReducer,
    // Photogrpher
    photographerReducer,
    singlePhotographerReducer,
    deletePhotgrapherReducer,

    //car rent
    carRentReducer,
    singleCarRentReducer,
    //Venue
    venueReducer,
    singleVenueReducer,

    //Location
    locationReducer,
    singleLocationReducer,

    //category
    singleHomeStoreCategoryDataReducer
  },
});

export default store;
