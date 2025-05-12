import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filteredProducts: [],
  },
  reducers: {
    filterByCategory: (state, action) => {
      const { products, category } = action.payload;
      let tempProducts = [];
      if (category === "All") {
        tempProducts = products;
      } else {
        tempProducts = products.filter(
          (product) => product.category === category
        );
      }
      state.filteredProducts = tempProducts;
    },
    filterByBrand: (state, action) => {
      const { products, brand } = action.payload;
      let tempProducts = [];
      if (brand === "All") {
        tempProducts = products;
      } else {
        tempProducts = products.filter((product) => product.brand === brand);
      }
      state.filteredProducts = tempProducts;
    },
    filterByPrice: (state, action) => {
      const { products, price } = action.payload;
      let tempProducts = [];
      tempProducts = products.filter((product) => product.price <= price);
      state.filteredProducts = tempProducts;
    },
  },
});

export const { filterByCategory, filterByBrand, filterByPrice } =
  filterSlice.actions;

export const selectFilteredProducts = (state) => state.filter.filteredProducts;

export default filterSlice.reducer;
