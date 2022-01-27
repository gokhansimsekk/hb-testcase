import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("<Footer />", () => {
  it("should render component", () => {
    render(<Footer />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
