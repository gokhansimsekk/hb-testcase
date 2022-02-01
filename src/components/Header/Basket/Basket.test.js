import { render, screen } from "utils/test-utils";
import Basket from "./Basket";
import * as basketSlice from "store/basketSlice";

const localStorageMock = (function () {
  let store = {};

  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value;
    },
  };
})();

beforeAll(() => {
  Object.defineProperty(window, "localStorage", {
    value: localStorageMock,
  });
});

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

  it("should set data on first load", () => {
    const setDataSpy = jest.spyOn(basketSlice, "setData");

    localStorageMock.setItem(
      "basket",
      JSON.stringify([{ id: 1, title: "Test" }])
    );

    render(<Basket />);

    expect(setDataSpy).toHaveBeenCalledWith([{ id: 1, title: "Test" }]);
  });
});
