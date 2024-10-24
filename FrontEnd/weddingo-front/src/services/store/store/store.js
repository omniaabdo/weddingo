import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

// إنشاء الـ asyncThunk لإرسال بيانات إلى الـ API
export const registerHomeStoreApi = createAsyncThunk(
  "registerHomeStore",
  async (homeStoreData) => {
    const token = JSON.parse(localStorage.getItem("userData")).token;
    console.log(homeStoreData);
    

    return await fetch(`${BASE_URL}/home-store/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: homeStoreData.name,
        description: homeStoreData.description,
        price: homeStoreData.price,
        status: homeStoreData.status,
        stockCount: homeStoreData.stockCount,
        isActive: homeStoreData.isActive === "on" ? (homeStoreData.isActive = true) : (homeStoreData.isActive = false),
        category: homeStoreData.category
      }),
    })
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => error);
  }
);

// إنشاء Slice لحالة بيانات 
const homeStoreDataSlicer = createSlice({
  name: "homeStoreData",
  initialState: {
    loading: false,
    center: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(registerHomeStoreApi.pending, (state) => {
      state.loading = true;
      state.center = null;
      state.error = null;
    });
    builder.addCase(registerHomeStoreApi.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.status === "success") {
        state.center = action.payload;
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(registerHomeStoreApi.rejected, (state, action) => {
      state.loading = false;
      state.center = null;
      state.error = action.error;
    });
  },
});

export default homeStoreDataSlicer.reducer;
