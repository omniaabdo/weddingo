import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

export const loginUserApi = createAsyncThunk(
  "login",
  async (userCredentials) => {
    try {
      const response = await fetch(`${BASE_URL}/api/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userCredentials.email,
          password: userCredentials.password,
        }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Failed to login');
      }

      const result = await response.json();
      return result;
    } catch (error) {
      throw new Error(error.message || 'An error occurred while logging in');
    }
  }
);

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserApi.pending, (state) => {
      state.loading = true;
      state.user = null;
      state.error = null;
    });
    builder.addCase(loginUserApi.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload; // Set user data from payload
      state.error = null;
    });
    builder.addCase(loginUserApi.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.error.message; // Set the error message for better clarity
    });
  },
});

export default userLoginSlice.reducer;
