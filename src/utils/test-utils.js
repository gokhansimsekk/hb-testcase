import { render as rtlRender } from "@testing-library/react";
import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { Provider } from "react-redux";
import reducers from "store/reducers";

function render(
  ui,
  {
    initialState = {},
    store = createStore(reducers, initialState, applyMiddleware(thunk)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";

export { render };
