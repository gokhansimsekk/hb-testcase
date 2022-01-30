import { render, screen } from "utils/test-utils";
import Content from "./Content";

describe("<Content />", () => {
  it("should render components", () => {
    render(<Content />);

    expect(screen.getByTestId("filter")).toBeInTheDocument(); // filter
    expect(screen.getByTestId("results")).toBeInTheDocument(); // results
  });
});
