import { render, screen } from "@testing-library/react";
import Results from "./Results";

describe("<Results />", () => {
  it("should render component", () => {
    render(<Results />);

    expect(screen.getByText("Results")).toBeInTheDocument();
  });
});
