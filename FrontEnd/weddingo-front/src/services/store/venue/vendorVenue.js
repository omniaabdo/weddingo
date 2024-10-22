import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

// إنشاء الـ asyncThunk لإرسال بيانات المصور إلى الـ API
export const registerVenueApi = createAsyncThunk(
  "registerVenue",
  async (venueData) => {
    const token = JSON.parse(localStorage.getItem("userData")).token;

    return await fetch(`${BASE_URL}/api/venues/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: venueData.name,
        description: venueData.description,
        capacity: venueData.capacity, // إضافة السعة
        avalabileDate: venueData.avalabileDate,
        feature: venueData.feature,
        location: {
          city: venueData.location.city,
          state: venueData.location.state,
        },
        contacts: {
          phoneNumber: venueData.contacts.phoneNumber,
          facebookLink: venueData.contacts.facebookLink,
          twitterLink: venueData.contacts.twitterLink,
          instegramLink: venueData.contacts.instegramLink,
        },
        price: venueData.price, // إضافة السعر
      }),
    })
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => error);
  }
);

// إنشاء Slice لحالة بيانات المصور
const venueDataSlicer = createSlice({
  name: "venueData",
  initialState: {
    loading: false,
    venue: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(registerVenueApi.pending, (state) => {
      state.loading = true;
      state.venue = null;
      state.error = null;
    });
    builder.addCase(registerVenueApi.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.status === "success") {
        state.venue = action.payload;
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(registerVenueApi.rejected, (state, action) => {
      state.loading = false;
      state.venue = null;
      state.error = action.error;
    });
  },
});

export default venueDataSlicer.reducer;
