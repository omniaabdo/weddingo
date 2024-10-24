import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

// إنشاء الـ asyncThunk لإرسال بيانات المصور إلى الـ API
export const getallDataservices = createAsyncThunk("getHomeData", async () => {
  return await fetch(`${BASE_URL}/api/home/all`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
});

// إنشاء Slice لحالة بيانات المصور
const getAllDataSlicer = createSlice({
  name: "home/getAll",
  initialState: {
    loading: false,
    homeData: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getallDataservices.pending, (state) => {
      state.loading = true;
      state.homeData = null;
      state.error = null;
    });
    builder.addCase(getallDataservices.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.status === "success") {
        state.homeData = action.payload;
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(getallDataservices.rejected, (state, action) => {
      state.loading = false;
      state.homeData = null;
      state.error = action.error;
    });
  },
});

export default getAllDataSlicer.reducer;
