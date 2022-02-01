import { combineReducers } from "@reduxjs/toolkit";
import basketSlice from "./basketSlice";
import productsSlice from "./productsSlice";

export default combineReducers({
  basket: basketSlice.reducer,
  products: productsSlice.reducer,
});
