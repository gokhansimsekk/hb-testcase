import { render, screen, fireEvent } from "@testing-library/react";
import Basket from "./Basket";

describe("<Basket />", () => {
  it("should render component", () => {
    render(<Basket />);
    expect(screen.getByText("Sepetim")).toBeInTheDocument();
  });
});
