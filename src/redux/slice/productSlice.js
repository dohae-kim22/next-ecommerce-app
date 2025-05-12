const { createSlice } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    minPrice: null,
    maxPrice: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
    },
    getPriceRange: (state, action) => {
      const { products } = action.payload;
      const arr = [];
      products.map((product) => {
        const price = product.price;
        return arr.push(price);
      });

      const max = Math.max(...arr);
      const min = Math.min(...arr);
      state.minPrice = min;
      state.maxPrice = max;
    },
  },
});

export const { setProducts, getPriceRange } = productSlice.actions;
export const selectProducts = (state) => state.product.products;
export const selectMinPrice = (state) => state.product.minPrice;
export const selectMaxPrice = (state) => state.product.maxPrice;

export default productSlice.reducer;
