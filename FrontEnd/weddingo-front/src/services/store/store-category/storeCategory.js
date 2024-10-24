import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

// إنشاء الـ asyncThunk لإرسال بيانات إلى الـ API
export const registerHomeStoreCategoryApi = createAsyncThunk(
  "registerHomeStoreCategory",
  async (homeStoreCategoryData) => {
    const token = JSON.parse(localStorage.getItem("userData")).token;

    return await fetch(`${BASE_URL}/home-store-category/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: homeStoreCategoryData.name,
        description: homeStoreCategoryData.description,
        price: homeStoreCategoryData.price,
        status: homeStoreCategoryData.status
      }),
    })
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => error);
  }
);

// إنشاء Slice لحالة بيانات 
const homeStoreCategoryDataSlicer = createSlice({
  name: "homeStoreCategoryData",
  initialState: {
    loading: false,
    center: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(registerHomeStoreCategoryApi.pending, (state) => {
      state.loading = true;
      state.center = null;
      state.error = null;
    });
    builder.addCase(registerHomeStoreCategoryApi.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.status === "success") {
        state.center = action.payload;
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(registerHomeStoreCategoryApi.rejected, (state, action) => {
      state.loading = false;
      state.center = null;
      state.error = action.error;
    });
  },
});

export default homeStoreCategoryDataSlicer.reducer;
