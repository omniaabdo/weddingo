import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

// إنشاء الـ asyncThunk لإرسال بيانات المصور إلى الـ API
export const registerCarRentApi = createAsyncThunk(
  "registerCarRent",
  async (carRentData) => {
    const token = JSON.parse(localStorage.getItem("userData")).token;
    console.log(carRentData);
    

    return await fetch(`${BASE_URL}/car-rent/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: carRentData.name,
        description: carRentData.description,
        brand: carRentData.brand,
        carType: carRentData.type,
        year: carRentData.year,
        color: carRentData.color,
        seatCapacity: carRentData.seatCapacity,
        priceParDay: carRentData.priceParDay,
        avalabileDate: carRentData.avalabileDate,
        feature: carRentData.feature,
        isAvailable: carRentData.isAvailable,
        location: {
          city: carRentData.location.city,
          state: carRentData.location.state,
        },
        contacts: {
          phoneNumber: carRentData.contacts.phoneNumber,
          facebookLink: carRentData.contacts.facebookLink,
          twitterLink: carRentData.contacts.twitterLink,
          instegramLink: carRentData.contacts.instegramLink,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => error);
  }
);

// إنشاء Slice لحالة بيانات المصور
const carRentDataSlicer = createSlice({
  name: "carRentData",
  initialState: {
    loading: false,
    car: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(registerCarRentApi.pending, (state) => {
      state.loading = true;
      state.car = null;
      state.error = null;
    });
    builder.addCase(registerCarRentApi.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.status === "success") {
        state.car = action.payload;
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(registerCarRentApi.rejected, (state, action) => {
      state.loading = false;
      state.car = null;
      state.error = action.error;
    });
  },
});

export default carRentDataSlicer.reducer;
