import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

// إنشاء الـ asyncThunk لإرسال بيانات إلى الـ API
export const registerBeautyCenterApi = createAsyncThunk(
  "registerBeautyCenter",
  async (beautyCenterData) => {
    const token = JSON.parse(localStorage.getItem("userData")).token;
    console.log(beautyCenterData);
    

    return await fetch(`${BASE_URL}/beauty-center/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: beautyCenterData.name,
        description: beautyCenterData.description,
        brand: beautyCenterData.brand,
        centerType: beautyCenterData.type,
        year: beautyCenterData.year,
        color: beautyCenterData.color,
        seatCapacity: beautyCenterData.seatCapacity,
        price: beautyCenterData.price,
        address: beautyCenterData.address,
        status: beautyCenterData.status,
        avalabileDate: beautyCenterData.avalabileDate,
        feature: beautyCenterData.feature,
        isAvailable: beautyCenterData.isAvailable,
        location: {
          city: beautyCenterData.location.city,
          state: beautyCenterData.location.state,
        },
        contacts: {
          phoneNumber: beautyCenterData.contacts.phoneNumber,
          facebookLink: beautyCenterData.contacts.facebookLink,
          twitterLink: beautyCenterData.contacts.twitterLink,
          instegramLink: beautyCenterData.contacts.instegramLink,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => error);
  }
);

// إنشاء Slice لحالة بيانات 
const beautyCenterDataSlicer = createSlice({
  name: "beautyCenterData",
  initialState: {
    loading: false,
    center: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(registerBeautyCenterApi.pending, (state) => {
      state.loading = true;
      state.center = null;
      state.error = null;
    });
    builder.addCase(registerBeautyCenterApi.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.status === "success") {
        state.center = action.payload;
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(registerBeautyCenterApi.rejected, (state, action) => {
      state.loading = false;
      state.center = null;
      state.error = action.error;
    });
  },
});

export default beautyCenterDataSlicer.reducer;
