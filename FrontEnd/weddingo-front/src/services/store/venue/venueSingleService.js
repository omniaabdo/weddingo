import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

// إنشاء الـ asyncThunk لإرسال بيانات المصور إلى الـ API
export const getVenueApi = createAsyncThunk("getVenue", async (venueId) => {
  return await fetch(`${BASE_URL}/api/venues/${venueId}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
});

// إنشاء Slice لحالة بيانات المصور
const singleVenueDataSlicer = createSlice({
  name: "venue/getbyid",
  initialState: {
    loading: false,
    venue: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getVenueApi.pending, (state) => {
      state.loading = true;
      state.venue = null;
      state.error = null;
    });
    builder.addCase(getVenueApi.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.status === "success") {
        state.venue = action.payload;
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(getVenueApi.rejected, (state, action) => {
      state.loading = false;
      state.venue = null;
      state.error = action.error;
    });
  },
});

export default singleVenueDataSlicer.reducer;
