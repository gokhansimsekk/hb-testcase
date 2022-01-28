import { render, screen, fireEvent } from "@testing-library/react";
import Basket from "./Basket";

describe("<Basket />", () => {
  it("should render component", () => {
    render(<Basket />);
    expect(screen.getByText("Sepetim")).toBeInTheDocument();
  });

  it("should toggle the basket when click the button", () => {
    render(<Basket />);

    const button = screen.getByTestId("basket-open-button");
    fireEvent.click(button);

    expect(screen.getByText(/iPhone 11 Kırmızı Kılıflı/i)).toBeInTheDocument();

    fireEvent.click(button);

    expect(
      screen.queryByText(/iPhone 11 Kırmızı Kılıflı/i)
    ).not.toBeInTheDocument();
  });

  // it("should close the basket when click anything but basket", () => {
  //   render(<Basket />);
  // });
});
