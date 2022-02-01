import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default configureStore({
  reducer: rootReducer,
});
