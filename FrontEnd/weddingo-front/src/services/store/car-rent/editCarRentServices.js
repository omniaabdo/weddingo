import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/config";

export const editCarApi = createAsyncThunk(
  "editCarbyid",
  async ({ id, CarData }) => {
    const token = JSON.parse(localStorage.getItem("userData")).token;

    return await fetch(`${BASE_URL}/car-rent/${id}`, {
      method: "PUT", // تعديل البيانات باستخدام method PUT
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: CarData.name,
        description: CarData.description,
        brand: CarData.brand,
        carType: CarData.carType,
        year: CarData.year,
        color: CarData.color,
        seatCapacity: CarData.seatCapacity,
        priceParDay: CarData.priceParDay,
        avalabileDate: CarData.avalabileDate,
        feature: CarData.feature,
        isAvailable: CarData.isAvailable,
        location: {
          city: CarData.location.city,
          state: CarData.location.state,
        },
        contacts: {
          phoneNumber: CarData.contacts.phoneNumber,
          facebookLink: CarData.contacts.facebookLink,
          twitterLink: CarData.contacts.twitterLink,
          instegramLink: CarData.contacts.instegramLink,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => error);
  }
);

// إنشاء Slice لحالة بيانات المصور
const editCarRentDataSlicer = createSlice({
  name: "car/edit",
  initialState: {
    loading: false,
    response: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(editCarApi.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null;
    });
    builder.addCase(editCarApi.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.status === "success") {
        state.response = action.payload;
        console.log(action.payload);
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(editCarApi.rejected, (state, action) => {
      state.loading = false;
      state.response = null;
      state.error = action.error;
    });
  },
});

export default editCarRentDataSlicer.reducer;
