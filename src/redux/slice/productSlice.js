const { createSlice } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
    },
  },
});

export const { setProducts, setSelectedProduct } = productSlice.actions;
export const selectProducts = (state) => state.product.products;
export default productSlice.reducer;
