import { render, screen } from "@testing-library/react";
import Content from "./Content";

describe("<Content />", () => {
  it("should render components", () => {
    render(<Content />);

    expect(screen.getByTestId("filter")).toBeInTheDocument(); // filter
    expect(screen.getByText("Results")).toBeInTheDocument(); // results
  });
});
