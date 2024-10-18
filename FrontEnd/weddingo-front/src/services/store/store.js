import { configureStore } from "@reduxjs/toolkit";
import regesterReducer from "./auth/rejester";
import loginReducer from "./auth/login";
const store = configureStore({
  reducer: {
    regesterReducer,
    loginReducer,
  },
});

export default store;
