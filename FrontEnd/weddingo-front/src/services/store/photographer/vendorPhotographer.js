import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

// إنشاء الـ asyncThunk لإرسال بيانات المصور إلى الـ API
export const registerPhotographerApi = createAsyncThunk(
  "registerPhotographer",
  async (photographerData) => {
    const token = JSON.parse(localStorage.getItem("userData")).token;

    return await fetch(`${BASE_URL}/photographer/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: photographerData.name,
        description: photographerData.description,
        availableDays: photographerData.availableDays,
        feature: photographerData.feature,
        location: {
          city: photographerData.location.city,
          state: photographerData.location.state,
        },
        contacts: {
          phoneNumber: photographerData.contacts.phoneNumber,
          facebookLink: photographerData.contacts.facebookLink,
          twitterLink: photographerData.contacts.twitterLink,
          instegramLink: photographerData.contacts.instegramLink,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => error);
  }
);

// إنشاء Slice لحالة بيانات المصور
const photographerDataSlicer = createSlice({
  name: "photographerData",
  initialState: {
    loading: false,
    photographer: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(registerPhotographerApi.pending, (state) => {
      state.loading = true;
      state.photographer = null;
      state.error = null;
    });
    builder.addCase(registerPhotographerApi.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.status === "success") {
        state.photographer = action.payload;
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(registerPhotographerApi.rejected, (state, action) => {
      console.log("from akhshdka", action);

      state.loading = false;
      state.photographer = null;
      state.error = action.error;
    });
  },
});

export default photographerDataSlicer.reducer;
