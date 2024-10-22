import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

// إنشاء الـ asyncThunk لإرسال بيانات المصور إلى الـ API
export const deletePhotographerApi = createAsyncThunk(
  "deletePhotographer",
  async ({ id, url }) => {
    return await fetch(`${BASE_URL}/${url}/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => error);
  }
);

// إنشاء Slice لحالة بيانات المصور
const deletePhotgrapherService = createSlice({
  name: "photographer/deleteOne",
  initialState: {
    loading: false,
    photographer: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(deletePhotographerApi.pending, (state) => {
      state.loading = true;
      state.photographer = null;
      state.error = null;
    });
    builder.addCase(deletePhotographerApi.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.status === "success") {
        state.photographer = action.payload;
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(deletePhotographerApi.rejected, (state, action) => {
      state.loading = false;
      state.photographer = null;
      state.error = action.error;
    });
  },
});

export default deletePhotgrapherService.reducer;
