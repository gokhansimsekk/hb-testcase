import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const basketAdapter = createEntityAdapter({
  selectId: (item) => item.id,
  sortComparer: (a, b) => b.inserttime - a.inserttime,
});

const basketSlice = createSlice({
  name: "basket",
  initialState: basketAdapter.getInitialState({
    currentItem: null,
  }),
  reducers: {
    addItem: basketAdapter.addOne,
    removeItem: basketAdapter.removeOne,
    setData: basketAdapter.setAll,
  },
});

export const basketSelectors = basketAdapter.getSelectors();

export const { addItem, removeItem, setData } = basketSlice.actions;

export default basketSlice;
