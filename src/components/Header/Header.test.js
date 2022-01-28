import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("<Header />", () => {
  it("should render components", () => {
    render(<Header />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/25 milyon’dan fazla ürün içerisinde ara/i)
    ).toBeInTheDocument(); // search component
    expect(screen.getByTestId("basket-open-button")).toBeInTheDocument(); // basket component
  });
});
