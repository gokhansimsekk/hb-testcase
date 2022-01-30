import { render, screen } from "utils/test-utils";
import Paginator from "./Paginator";

describe("<Paginator />", () => {
  it("should render component", () => {
    render(<Paginator />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});
