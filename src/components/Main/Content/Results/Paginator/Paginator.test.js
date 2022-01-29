import { render, screen } from "@testing-library/react";
import Paginator from "./Paginator";

describe("<Paginator />", () => {
  it("should render component", () => {
    render(<Paginator />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});
