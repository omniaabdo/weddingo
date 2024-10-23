import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

// إنشاء الـ asyncThunk لإرسال بيانات المصور إلى الـ API
export const getHomeData = createAsyncThunk("getHomeData", async () => {
  return await fetch(`${BASE_URL}/api/home/`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
});

// إنشاء Slice لحالة بيانات المصور
const singleHomeDataSlicer = createSlice({
  name: "home/getData",
  initialState: {
    loading: false,
    homeData: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getHomeData.pending, (state) => {
      state.loading = true;
      state.homeData = null;
      state.error = null;
    });
    builder.addCase(getHomeData.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.status === "success") {
        state.homeData = action.payload;
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(getHomeData.rejected, (state, action) => {
      state.loading = false;
      state.homeData = null;
      state.error = action.error;
    });
  },
});

export default singleHomeDataSlicer.reducer;
