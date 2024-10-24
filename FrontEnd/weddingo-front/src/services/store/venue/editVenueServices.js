import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

export const editVenueApi = createAsyncThunk(
  "editVenuebyid",
  async ({ id, venueData }) => {
    const token = JSON.parse(localStorage.getItem("userData")).token;

    return await fetch(`${BASE_URL}/api/venues/${id}`, {
      method: "PUT", // تعديل البيانات باستخدام method PUT
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: venueData.name,
        description: venueData.description,
        capacity: venueData.capacity, // إضافة السعة
        avalabileDate: venueData.avalabileDate,
        feature: venueData.feature,
        location: {
          city: venueData.location.city,
          state: venueData.location.state,
        },
        contacts: {
          phoneNumber: venueData.contacts.phoneNumber,
          facebookLink: venueData.contacts.facebookLink,
          twitterLink: venueData.contacts.twitterLink,
          instegramLink: venueData.contacts.instegramLink,
        },
        price: venueData.price,
      }),
    })
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => error);
  }
);

// إنشاء Slice لحالة بيانات المصور
const editVenueServicesDataSlicer = createSlice({
  name: "venue/edit",
  initialState: {
    loading: false,
    response: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(editVenueApi.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null;
    });
    builder.addCase(editVenueApi.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.status === "success") {
        state.response = action.payload;
        console.log(action.payload);
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(editVenueApi.rejected, (state, action) => {
      state.loading = false;
      state.response = null;
      state.error = action.error;
    });
  },
});

export default editVenueServicesDataSlicer.reducer;
