import { render, screen } from "utils/test-utils";
import Results from "./Results";

describe("<Results />", () => {
  it("should render component", () => {
    render(<Results />);

    expect(screen.getByTestId("results")).toBeInTheDocument();
  });
});
