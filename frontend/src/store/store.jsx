import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "./reducers/ProfileSlice";
import AboutReducer from "./reducers/AboutSlice";

export const store = configureStore({
  reducer: {
    profile: ProfileReducer,
    about: AboutReducer,
    // ProductReducer: ProductReducer,
    // here inlcude link to your slices or reducers
  },
});
