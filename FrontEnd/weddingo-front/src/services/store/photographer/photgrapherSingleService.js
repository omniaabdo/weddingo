import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

// إنشاء الـ asyncThunk لإرسال بيانات المصور إلى الـ API
export const getPhotographerApi = createAsyncThunk(
  "getPhotographer",
  async (photographerId) => {
    console.log("here is good", photographerId);

    return await fetch(`${BASE_URL}/photographer/${photographerId}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => error);
  }
);

// إنشاء Slice لحالة بيانات المصور
const singlePhotographerDataSlicer = createSlice({
  name: "photographer/getbyid",
  initialState: {
    loading: false,
    photographer: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getPhotographerApi.pending, (state) => {
      state.loading = true;
      state.photographer = null;
      state.error = null;
    });
    builder.addCase(getPhotographerApi.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.status === "success") {
        console.log("here is good two", action.payload);
        state.photographer = action.payload;
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(getPhotographerApi.rejected, (state, action) => {
      state.loading = false;
      state.photographer = null;
      state.error = action.error;
    });
  },
});

export default singlePhotographerDataSlicer.reducer;
