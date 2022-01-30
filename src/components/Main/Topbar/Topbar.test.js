import { render, screen } from "utils/test-utils";
import Topbar from "./Topbar";

describe("<Topbar />", () => {
  it("should render components", () => {
    render(<Topbar />);

    expect(screen.getByText(/iPhone iOS cep telefonu/i)).toBeInTheDocument(); // title
    expect(screen.getByTestId("sort-select")).toBeInTheDocument(); // sort
  });
});
