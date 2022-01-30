import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./reducers";

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
