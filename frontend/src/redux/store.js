import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; // Import reducer

const store = configureStore({
  reducer: {
    counter: counterReducer, // Register the slice reducer
  },
});

export default store;
