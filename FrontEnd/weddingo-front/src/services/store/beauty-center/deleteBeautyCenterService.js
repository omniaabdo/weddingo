import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

// إنشاء الـ asyncThunk لإرسال بيانات إلى الـ API
export const deleteBeautyCenterApi = createAsyncThunk(
  "deleteBeautyCenter",
  async (beautyCenterId) => {

    return await fetch(`${BASE_URL}/beauty-center/${beautyCenterId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => error);
  }
);

// إنشاء Slice لحالة بيانات 
const deleteBeautyCenterService = createSlice({
  name: "beautyCenter/deleteOne",
  initialState: {
    loading: false,
    beautyCenter: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(deleteBeautyCenterApi.pending, (state) => {
      state.loading = true;
      state.beautyCenter = null;
      state.error = null;
    });
    builder.addCase(deleteBeautyCenterApi.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.status === "success") {
        state.beautyCenter = action.payload;
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(deleteBeautyCenterApi.rejected, (state, action) => {
      state.loading = false;
      state.beautyCenter = null;
      state.error = action.error;
    });
  },
});

export default deleteBeautyCenterService.reducer;
