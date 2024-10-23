import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

// إنشاء الـ asyncThunk لإرسال بيانات المصور إلى الـ API
export const registerLocationApi = createAsyncThunk(
  "registerLocation",
  async (locationData) => {
    const token = JSON.parse(localStorage.getItem("userData")).token;

    return await fetch(`${BASE_URL}/location/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: locationData.name,
        description: locationData.description,
        capacity: locationData.capacity, // إضافة السعة
        avalabileDate: locationData.avalabileDate,
        feature: locationData.feature,
        location: {
          city: locationData.location.city,
          state: locationData.location.state,
        },
        contacts: {
          phoneNumber: locationData.contacts.phoneNumber,
          facebookLink: locationData.contacts.facebookLink,
          twitterLink: locationData.contacts.twitterLink,
          instegramLink: locationData.contacts.instegramLink,
        },
        price: locationData.price, // إضافة السعر
      }),
    })
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => error);
  }
);

// إنشاء Slice لحالة بيانات المصور
const locationDataSlicer = createSlice({
  name: "locationData",
  initialState: {
    loading: false,
    location: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(registerLocationApi.pending, (state) => {
      state.loading = true;
      state.location = null;
      state.error = null;
    });
    builder.addCase(registerLocationApi.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.status === "success") {
        state.location = action.payload;
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(registerLocationApi.rejected, (state, action) => {
      state.loading = false;
      state.location = null;
      state.error = action.error;
    });
  },
});

export default locationDataSlicer.reducer;
