import { render, screen } from "utils/test-utils";
import Results from "./Results";
import useCustomQuery from "hooks/useCustomQuery";

jest.mock("hooks/useCustomQuery");

jest.mock(
  "mocks/products",
  () => ({
    products: [[{ id: 1, title: "Test" }]],
  }),
  { virtual: true }
);

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

describe("<Results />", () => {
  const storedData = () => {
    localStorageMock.setItem(
      "products",
      JSON.stringify([
        {
          id: 1,
          title: "Test 1",
          image: "image1.png",
          color: "red",
          brand: "apple",
          price: "100",
          inserttime: "2020-01-01",
        },
        {
          id: 2,
          title: "Test 2",
          image: "image2.png",
          color: "blue",
          brand: "samsung",
          price: "120",
          inserttime: "2020-02-01",
        },
        {
          id: 3,
          title: "Test 3",
          image: "image3.png",
          color: "yellow",
          brand: "nokia",
          price: "130",
          inserttime: "2020-03-01",
        },
        {
          id: 4,
          title: "Test 4",
          image: "image4.png",
          color: "black",
          brand: "lg",
          price: "150",
          inserttime: "2020-04-01",
        },
      ])
    );
  };

  it("should filter data by brand", () => {
    storedData();

    const customQueryMock = {
      customQuery: { sort: "", color: [], brand: ["apple", "nokia"] },
    };
    useCustomQuery.mockImplementation(() => customQueryMock);

    render(<Results />);

    expect(screen.getByText("apple")).toBeInTheDocument();
    expect(screen.getByText("nokia")).toBeInTheDocument();
    expect(screen.queryByText("lg")).not.toBeInTheDocument();
    expect(screen.queryByText("samsung")).not.toBeInTheDocument();
  });

  it("should filter data by color", () => {
    storedData();

    const customQueryMock = {
      customQuery: { sort: "", color: ["red", "blue"], brand: [] },
    };
    useCustomQuery.mockImplementation(() => customQueryMock);

    render(<Results />);

    expect(screen.getByText("red")).toBeInTheDocument();
    expect(screen.getByText("blue")).toBeInTheDocument();
    expect(screen.queryByText("black")).not.toBeInTheDocument();
    expect(screen.queryByText("yellow")).not.toBeInTheDocument();
  });

  it("should filter data by query", () => {
    storedData();

    const customQueryMock = {
      customQuery: { sort: "", color: [], brand: [], q: "test 1" },
    };
    useCustomQuery.mockImplementation(() => customQueryMock);

    render(<Results />);

    expect(screen.getByText("Test 1")).toBeInTheDocument();
    expect(screen.queryByText("Test 2")).not.toBeInTheDocument();
    expect(screen.queryByText("Test 3")).not.toBeInTheDocument();
    expect(screen.queryByText("Test 4")).not.toBeInTheDocument();
  });

  it("should sort data lowest to highest", () => {
    storedData();

    const customQueryMock = {
      customQuery: { sort: "lowest", color: [], brand: [] },
    };
    useCustomQuery.mockImplementation(() => customQueryMock);

    render(<Results />);

    const cards = screen.getAllByTestId("card-test");

    expect(cards[0]).toHaveTextContent(/Test 1/i);
    expect(cards[3]).toHaveTextContent(/Test 4/i);
  });

  it("should sort data highest to lowest", () => {
    storedData();

    const customQueryMock = {
      customQuery: { sort: "highest", color: [], brand: [] },
    };
    useCustomQuery.mockImplementation(() => customQueryMock);

    render(<Results />);

    const cards = screen.getAllByTestId("card-test");

    expect(cards[0]).toHaveTextContent(/Test 4/i);
    expect(cards[3]).toHaveTextContent(/Test 1/i);
  });

  it("should sort data oldest to newest", () => {
    storedData();

    const customQueryMock = {
      customQuery: { sort: "oldest", color: [], brand: [] },
    };
    useCustomQuery.mockImplementation(() => customQueryMock);

    render(<Results />);

    const cards = screen.getAllByTestId("card-test");

    expect(cards[0]).toHaveTextContent(/Test 1/i);
    expect(cards[3]).toHaveTextContent(/Test 4/i);
  });

  it("should sort data newest to oldest", () => {
    storedData();

    const customQueryMock = {
      customQuery: { sort: "newest", color: [], brand: [] },
    };
    useCustomQuery.mockImplementation(() => customQueryMock);

    render(<Results />);

    const cards = screen.getAllByTestId("card-test");

    expect(cards[0]).toHaveTextContent(/Test 4/i);
    expect(cards[3]).toHaveTextContent(/Test 1/i);
  });
});
