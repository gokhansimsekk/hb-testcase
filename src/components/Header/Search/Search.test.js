import { render, screen } from "utils/test-utils";
import Search from "./Search";

describe("<Search />", () => {
  it("should render component", () => {
    render(<Search />);
    expect(
      screen.getByPlaceholderText(/25 milyon’dan fazla ürün içerisinde ara/i)
    ).toBeInTheDocument();
  });
});
