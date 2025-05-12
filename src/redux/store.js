import authReducer from './slice/authSlice';
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slice/productSlice';
import filterReducer from './slice/filterSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    filter: filterReducer,
  },
});

export default store;
