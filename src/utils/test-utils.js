import { render as rtlRender } from "@testing-library/react";
import { createStore } from "@reduxjs/toolkit";
import { QueryParamProvider } from "use-query-params";
import history from "@history";

import { Provider } from "react-redux";
import reducers from "store/reducers";

function render(
  ui,
  {
    initialState = {},
    store = createStore(reducers, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <QueryParamProvider history={history}>{children}</QueryParamProvider>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";

export { render };
