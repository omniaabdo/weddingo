import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

export const regesterUserApi = createAsyncThunk(
  "regester",
  async (userCredintianals) => {
    return await fetch(`${BASE_URL}/api/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: userCredintianals.fullName,
        email: userCredintianals.email,
        password: userCredintianals.password,
        role: userCredintianals.userType, // Added role here
      }),
    })
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => error);
  }
);

const userDataSlicer = createSlice({
  name: "userData",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(regesterUserApi.pending, (state) => {
      state.loading = true;
      state.user = null;
      state.error = null;
    });
    builder.addCase(regesterUserApi.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(regesterUserApi.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.error;
    });
  },
});

export default userDataSlicer.reducer;
