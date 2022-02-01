import { render, screen, fireEvent } from "utils/test-utils";
import Row from "./Row";
import useCustomQuery from "hooks/useCustomQuery";

jest.mock("hooks/useCustomQuery");

describe("<Row />", () => {
  it("should render component", () => {
    const customQueryMock = {
      customQuery: { sort: "", brand: [], color: [] },
    };
    useCustomQuery.mockImplementation(() => customQueryMock);

    render(<Row type="color" data={{ id: "red", title: "Red", count: 3 }} />);

    expect(screen.getByText("Red (3)")).toBeInTheDocument();
  });

  it("should mark as active when it is", () => {
    const customQueryMock = {
      customQuery: { brand: ["apple"] },
    };
    useCustomQuery.mockImplementation(() => customQueryMock);

    render(
      <Row type="brand" data={{ id: "apple", title: "Apple", count: 4 }} />
    );

    expect(screen.getByTestId("filter-button")).toHaveClass(
      "filter__button--active"
    );
  });

  it("should add color query string when click", () => {
    const customQueryMock = {
      customQuery: { color: ["blue"] },
      setCustomQuery: jest.fn(),
    };
    useCustomQuery.mockImplementation(() => customQueryMock);

    render(<Row type="color" data={{ id: "red", title: "Red", count: 3 }} />);

    const button = screen.getByTestId("filter-button");
    fireEvent.click(button);

    expect(customQueryMock.setCustomQuery).toHaveBeenCalledWith({
      page: 1,
      color: ["blue", "red"],
    });
  });

  it("should remove color query string when click again", () => {
    const customQueryMock = {
      customQuery: { color: ["blue", "red"] },
      setCustomQuery: jest.fn(),
    };
    useCustomQuery.mockImplementation(() => customQueryMock);

    render(<Row type="color" data={{ id: "red", title: "Red", count: 3 }} />);

    const button = screen.getByTestId("filter-button");
    fireEvent.click(button);

    expect(customQueryMock.setCustomQuery).toHaveBeenCalledWith({
      page: 1,
      color: ["blue"],
    });
  });

  it("should add sort query string when click", () => {
    const customQueryMock = {
      customQuery: { sort: "" },
      setCustomQuery: jest.fn(),
    };
    useCustomQuery.mockImplementation(() => customQueryMock);

    render(<Row type="sort" data={{ id: "lowest", title: "Lowest" }} />);

    const button = screen.getByTestId("filter-button");
    fireEvent.click(button);

    expect(customQueryMock.setCustomQuery).toHaveBeenCalledWith({
      page: 1,
      sort: "lowest",
    });
  });

  it("should remove sort query string when click again", () => {
    const customQueryMock = {
      customQuery: { sort: "lowest" },
      setCustomQuery: jest.fn(),
    };
    useCustomQuery.mockImplementation(() => customQueryMock);

    render(<Row type="sort" data={{ id: "lowest", title: "Lowest" }} />);

    const button = screen.getByTestId("filter-button");
    fireEvent.click(button);

    expect(customQueryMock.setCustomQuery).toHaveBeenCalledWith({
      page: 1,
      sort: "",
    });
  });

  it("should add brand query string when click", () => {
    const customQueryMock = {
      customQuery: { brand: [] },
      setCustomQuery: jest.fn(),
    };
    useCustomQuery.mockImplementation(() => customQueryMock);

    render(<Row type="brand" data={{ id: "apple", title: "Apple" }} />);

    const button = screen.getByTestId("filter-button");
    fireEvent.click(button);

    expect(customQueryMock.setCustomQuery).toHaveBeenCalledWith({
      page: 1,
      brand: ["apple"],
    });
  });

  it("should remove brand query string when click again", () => {
    const customQueryMock = {
      customQuery: { brand: ["apple", "samsung"] },
      setCustomQuery: jest.fn(),
    };
    useCustomQuery.mockImplementation(() => customQueryMock);

    render(<Row type="brand" data={{ id: "apple", title: "Apple" }} />);

    const button = screen.getByTestId("filter-button");
    fireEvent.click(button);

    expect(customQueryMock.setCustomQuery).toHaveBeenCalledWith({
      page: 1,
      brand: ["samsung"],
    });
  });
});
