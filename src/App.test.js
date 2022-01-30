import { render, screen } from "utils/test-utils";
import App from "./App";

describe("<App />", () => {
  it("should render components", () => {
    render(<App />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("main")).toBeInTheDocument();
  });
});
