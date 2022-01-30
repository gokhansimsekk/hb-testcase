import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const productsAdapter = createEntityAdapter({
  selectId: (product) => product.id,
  sortComparer: (a, b) => a.inserttime.localeCompare(b.inserttime),
});

const productsSlice = createSlice({
  name: "products",
  initialState: productsAdapter.getInitialState(),
  reducers: {
    setData: (state, action) => {
      productsAdapter.setAll(state, action.payload);
    },
  },
});

export const { setData } = productsSlice.actions;

export default productsSlice;
