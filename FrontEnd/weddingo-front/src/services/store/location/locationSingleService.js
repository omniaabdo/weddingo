import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

// إنشاء الـ asyncThunk لإرسال بيانات المصور إلى الـ API
export const getLocationApi = createAsyncThunk("getVenue", async (venueId) => {
  return await fetch(`${BASE_URL}/location/${venueId}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
});

// إنشاء Slice لحالة بيانات المصور
const singleLocationDataSlicer = createSlice({
  name: "location/getbyid",
  initialState: {
    loading: false,
    location: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getLocationApi.pending, (state) => {
      state.loading = true;
      state.location = null;
      state.error = null;
    });
    builder.addCase(getLocationApi.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.status === "success") {
        state.location = action.payload;
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(getLocationApi.rejected, (state, action) => {
      state.loading = false;
      state.location = null;
      state.error = action.error;
    });
  },
});

export default singleLocationDataSlicer.reducer;
