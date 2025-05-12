import authReducer from "./slice/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
});

export default store;
