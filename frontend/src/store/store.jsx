import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "./reducers/ProfileSlice";
import AboutReducer from "./reducers/AboutSlice";
import TestimonialReducer from "./reducers/TestimonialSlice";

export const store = configureStore({
  reducer: {
    profile: ProfileReducer,
    about: AboutReducer,
    testimonial: TestimonialReducer,

    // ProductReducer: ProductReducer,
    // here inlcude link to your slices or reducers
  },
});
