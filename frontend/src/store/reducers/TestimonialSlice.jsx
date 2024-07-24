// slices/CustomerSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

const TestimonialSlice = createSlice({
  name: "testimonial",
  initialState: {
    testList: [],
    testLoading: false,
    testError: null,
  },
  reducers: {
    // Fetch customers actions
    getTestimonialStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getTestimonialSuccess: (state, action) => {
      state.testList = action.payload;
      state.loading = false;
    },
    getTestimonialFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getTestimonialStart, getTestimonialSuccess, getTestimonialFailure } =
  TestimonialSlice.actions;

export default TestimonialSlice.reducer;
