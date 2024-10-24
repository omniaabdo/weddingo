import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

export const editPhotographerApi = createAsyncThunk(
  "editPhotographerbyid",
  async ({ id, photographerData }) => {
    const token = JSON.parse(localStorage.getItem("userData")).token;

    return await fetch(`${BASE_URL}/photographer/${id}`, {
      method: "PUT", // تعديل البيانات باستخدام method PUT
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: photographerData.name,
        description: photographerData.description,
        avalabileDate: photographerData.avalabileDate,
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
const editPhotographerDataSlicer = createSlice({
  name: "photographer/edit",
  initialState: {
    loading: false,
    response: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(editPhotographerApi.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null;
    });
    builder.addCase(editPhotographerApi.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.status === "success") {
        state.response = action.payload;
        console.log(action.payload);
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(editPhotographerApi.rejected, (state, action) => {
      state.loading = false;
      state.response = null;
      state.error = action.error;
    });
  },
});

export default editPhotographerDataSlicer.reducer;
