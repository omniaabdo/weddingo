import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

// إنشاء الـ asyncThunk لإرسال بيانات إلى الـ API
export const getHomeStoreCategoryApi = createAsyncThunk("getHomeStoreCategory", async () => {
  return await fetch(`${BASE_URL}/home-store-category`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
});

// إنشاء Slice لحالة بيانات
const singleHomeStoreCategoryDataSlicer = createSlice({
  name: "homeStoreCategory/getbyid",
  initialState: {
    loading: false,
    categories: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getHomeStoreCategoryApi.pending, (state) => {
      state.loading = true;
      state.categories = null;
      state.error = null;
    });
    builder.addCase(getHomeStoreCategoryApi.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.data) {
        state.categories = action.payload;
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(getHomeStoreCategoryApi.rejected, (state, action) => {
      state.loading = false;
      state.categories = null;
      state.error = action.error;
    });
  },
});

export default singleHomeStoreCategoryDataSlicer.reducer;
