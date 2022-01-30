import { render, screen } from "utils/test-utils";
import Basket from "./Basket";

describe("<Basket />", () => {
  it("should render component with data", () => {
    render(<Basket />, {
      initialState: {
        basket: {
          ids: [1, 2],
          entities: {
            1: {
              id: 1,
              title: "Test 1",
            },
            2: {
              id: 2,
              title: "Test 2",
            },
          },
        },
      },
    });
    expect(screen.getByText("Test 1")).toBeInTheDocument();
    expect(screen.getByText("Test 2")).toBeInTheDocument();
    expect(screen.getByTestId("basket-badge")).toHaveTextContent("2");
  });

  it("should not render badge and appear no data section when there is no data", () => {
    render(<Basket />, {
      initialState: {
        basket: {
          ids: [],
          entities: {},
        },
      },
    });

    expect(screen.queryByTestId("basket-badge")).not.toBeInTheDocument();
    expect(
      screen.getByText(/Sepetinizde ürün bulunmamaktadır./i)
    ).toBeInTheDocument();
  });
});
