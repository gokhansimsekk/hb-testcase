import { render, screen, fireEvent } from "utils/test-utils";
import Sort from "./Sort";
import useCustomQuery from "hooks/useCustomQuery";

jest.mock("hooks/useCustomQuery");

const customQueryMock = {
  customQuery: {
    sort: "lowest",
  },
  setCustomQuery: jest.fn(),
};

beforeEach(() => {
  useCustomQuery.mockImplementation(() => customQueryMock);
});

describe("<Sort />", () => {
  it("should render component", () => {
    render(<Sort />);

    expect(screen.getByTestId("sort-select")).toHaveValue("lowest");
  });

  it("should change query string when select change", () => {
    render(<Sort />);

    const select = screen.getByTestId("sort-select");
    fireEvent.change(select, { target: { value: "highest" } });

    expect(select).toHaveValue("highest");

    expect(customQueryMock.setCustomQuery).toHaveBeenCalledWith({
      page: 1,
      sort: "highest",
    });
  });
});
