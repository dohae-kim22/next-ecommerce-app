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
    filterBy: (state, action) => {
      const { products, category, brand, price } = action.payload;
      let tempProducts = [];

      if (category === "All") {
        tempProducts = products;
      } else {
        tempProducts = products.filter(
          (product) => product.category === category
        );
      }
      if (brand === "All") {
        tempProducts = tempProducts;
      } else {
        tempProducts = tempProducts.filter(
          (product) => product.brand === brand
        );
      }
      tempProducts = tempProducts.filter((product) => product.price <= price);
      state.filteredProducts = tempProducts;
    },
    sortProducts: (state, action) => {
      const { products, sort } = action.payload;
      let tempProducts = [];
      if (sort === "latest") {
        tempProducts = products
          .slice()
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      } else if (sort === "lowest-price") {
        tempProducts = products.slice().sort((a, b) => a.price - b.price);
      } else if (sort === "highest-price") {
        tempProducts = products.slice().sort((a, b) => b.price - a.price);
      }

      state.filteredProducts = tempProducts;
    },
  },
});

export const {
  filterByCategory,
  filterByBrand,
  filterByPrice,
  filterBy,
  sortProducts,
} = filterSlice.actions;

export const selectFilteredProducts = (state) => state.filter.filteredProducts;

export default filterSlice.reducer;
