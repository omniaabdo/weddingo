import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

// إنشاء الـ asyncThunk لإرسال بيانات إلى الـ API
export const getBeautyCenterApi = createAsyncThunk("getBeautyCenter", async (carId) => {
  return await fetch(`${BASE_URL}/beauty-center/${carId}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
});

// إنشاء Slice لحالة بيانات
const singleBeautyCenterDataSlicer = createSlice({
  name: "beautyCenter/getbyid",
  initialState: {
    loading: false,
    car: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getBeautyCenterApi.pending, (state) => {
      state.loading = true;
      state.car = null;
      state.error = null;
    });
    builder.addCase(getBeautyCenterApi.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.status === "success") {
        state.car = action.payload;
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(getBeautyCenterApi.rejected, (state, action) => {
      state.loading = false;
      state.car = null;
      state.error = action.error;
    });
  },
});

export default singleBeautyCenterDataSlicer.reducer;
