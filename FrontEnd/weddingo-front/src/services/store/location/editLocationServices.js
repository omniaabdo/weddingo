import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

export const editLocationApi = createAsyncThunk(
  "editLocationbyid",
  async ({ id, locationData }) => {
    const token = JSON.parse(localStorage.getItem("userData")).token;

    return await fetch(`${BASE_URL}/location/${id}`, {
      method: "PUT", // تعديل البيانات باستخدام method PUT
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: locationData.name,
        description: locationData.description,
        capacity: locationData.capacity, // إضافة السعة
        avalabileDate: locationData.avalabileDate,
        feature: locationData.feature,
        location: {
          city: locationData.location.city,
          state: locationData.location.state,
        },
        contacts: {
          phoneNumber: locationData.contacts.phoneNumber,
          facebookLink: locationData.contacts.facebookLink,
          twitterLink: locationData.contacts.twitterLink,
          instegramLink: locationData.contacts.instegramLink,
        },
        price: locationData.price,
      }),
    })
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => error);
  }
);

// إنشاء Slice لحالة بيانات المصور
const editLocationServicesDataSlicer = createSlice({
  name: "location/edit",
  initialState: {
    loading: false,
    response: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(editLocationApi.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null;
    });
    builder.addCase(editLocationApi.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.status === "success") {
        state.response = action.payload;
        console.log(action.payload);
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(editLocationApi.rejected, (state, action) => {
      state.loading = false;
      state.response = null;
      state.error = action.error;
    });
  },
});

export default editLocationServicesDataSlicer.reducer;
