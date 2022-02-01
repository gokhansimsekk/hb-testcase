import { render, screen, fireEvent } from "utils/test-utils";
import Paginator from "./Paginator";
import useCustomQuery from "hooks/useCustomQuery";

jest.mock("hooks/useCustomQuery");

const customQueryMock = {
  customQuery: {
    page: 2,
  },
  setCustomQuery: jest.fn(),
};

beforeEach(() => {
  useCustomQuery.mockImplementation(() => customQueryMock);
});

describe("<Paginator />", () => {
  it("should render component", () => {
    render(<Paginator totalCount={36} currentPage={1} />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("should go to prev page", () => {
    render(<Paginator totalCount={36} />);

    const button = screen.getByTestId("prev-button");
    fireEvent.click(button);

    expect(customQueryMock.setCustomQuery).toHaveBeenCalledWith({ page: 1 });
  });

  it("should go to next page", () => {
    render(<Paginator totalCount={36} />);

    const button = screen.getByTestId("next-button");
    fireEvent.click(button);

    expect(customQueryMock.setCustomQuery).toHaveBeenCalledWith({ page: 3 });
  });

  it("should go to specific page", () => {
    render(<Paginator totalCount={36} />);

    const button = screen.getByText("3");
    fireEvent.click(button);

    expect(customQueryMock.setCustomQuery).toHaveBeenCalledWith({ page: 3 });
  });

  it("should mark as active when it is", () => {
    render(<Paginator totalCount={36} />);

    const button = screen.getByText("2");

    expect(button).toHaveClass("paginator__button--active");
  });
});
