import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

// إنشاء الـ asyncThunk لإرسال بيانات إلى الـ API
export const deleteHomeStoreApi = createAsyncThunk(
  "deleteHomeStore",
  async (homeStoreId) => {

    return await fetch(`${BASE_URL}/home-store/${homeStoreId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => error);
  }
);

// إنشاء Slice لحالة بيانات 
const deleteHomeStoreService = createSlice({
  name: "homeStore/deleteOne",
  initialState: {
    loading: false,
    homeStore: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(deleteHomeStoreApi.pending, (state) => {
      state.loading = true;
      state.homeStore = null;
      state.error = null;
    });
    builder.addCase(deleteHomeStoreApi.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.status === "success") {
        state.homeStore = action.payload;
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(deleteHomeStoreApi.rejected, (state, action) => {
      state.loading = false;
      state.homeStore = null;
      state.error = action.error;
    });
  },
});

export default deleteHomeStoreService.reducer;
