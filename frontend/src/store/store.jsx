import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "./reducers/ProfileSlice";

export const store = configureStore({
  reducer: {
    profile: ProfileReducer,
    // ProductReducer: ProductReducer,
    // here inlcude link to your slices or reducers
  },
});
