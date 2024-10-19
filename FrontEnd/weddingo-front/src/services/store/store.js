import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./users/getUserServices";
import regesterReducer from "./auth/rejester";
import loginReducer from "./auth/login";
import photographerReducer from "./photographer/vendorPhotographer";
import singlePhotographerReducer from "./photographer/photgrapherSingleService";
const store = configureStore({
  reducer: {
    regesterReducer,
    loginReducer,
    userDataReducer,
    // Photogrpher
    photographerReducer,
    singlePhotographerReducer,
  },
});

export default store;
