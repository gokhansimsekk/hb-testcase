import { render, screen } from "utils/test-utils";
import Sort from "./Sort";

describe("<Sort />", () => {
  it("should render component", () => {
    render(<Sort />);

    expect(screen.getByTestId("sort-select")).toBeInTheDocument();
  });
});
