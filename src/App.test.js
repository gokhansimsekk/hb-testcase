import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("should render components", () => {
    render(<App />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("main")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
