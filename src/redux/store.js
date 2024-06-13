import { configureStore } from "@reduxjs/toolkit";
import formSlicesReducer from "./formSlices";
import productSlice from "./productSlice";

const store = configureStore({
  reducer: {
    forms: formSlicesReducer,
    products: productSlice,
  },
});

export default store;
