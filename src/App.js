import { QueryParamProvider } from "use-query-params";
import history from "@history";

import Header from "components/Header";
import Main from "components/Main";

import "assets/styles/main.scss";

function App() {
  return (
    <QueryParamProvider history={history}>
      <>
        <Header />
        <Main />
      </>
    </QueryParamProvider>
  );
}

export default App;
