import { render, screen } from "@testing-library/react";
import Sort from "./Sort";

describe("<Sort />", () => {
  it("should render component", () => {
    render(<Sort />);

    expect(screen.getByTestId("sort-select")).toBeInTheDocument();
  });
});
