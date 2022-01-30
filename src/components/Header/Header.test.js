import { render, screen } from "utils/test-utils";
import Header from "./Header";

describe("<Header />", () => {
  it("should render components", () => {
    render(<Header />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/25 milyon’dan fazla ürün içerisinde ara/i)
    ).toBeInTheDocument(); // search component
    expect(screen.getByText("Sepetim")).toBeInTheDocument(); // basket component
  });
});
