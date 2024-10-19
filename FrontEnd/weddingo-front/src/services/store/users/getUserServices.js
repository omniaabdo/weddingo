import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

export const getAllUserServicesApi = createAsyncThunk(
  "userServices",
  async () => {
    const token = JSON.parse(localStorage.getItem("userData")).token;

    return await fetch(`${BASE_URL}/api/users/services`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => error);
  }
);

// إنشاء Slice لحالة بيانات المصور
const userDataSlicer = createSlice({
  name: "user/getServices",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUserServicesApi.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    });
    builder.addCase(getAllUserServicesApi.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.status === "success") {
        state.data = action.payload;
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(getAllUserServicesApi.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.error;
    });
  },
});

export default userDataSlicer.reducer;
