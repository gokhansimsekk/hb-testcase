import { render, screen, fireEvent, waitFor } from "utils/test-utils";
import Search from "./Search";

import useCustomQuery from "hooks/useCustomQuery";

jest.mock("hooks/useCustomQuery");

const customQueryMock = {
  customQuery: {
    q: "test",
  },
  setCustomQuery: jest.fn(),
};

beforeEach(() => {
  useCustomQuery.mockImplementation(() => customQueryMock);
});

describe("<Search />", () => {
  it("should render component", () => {
    render(<Search />);
    expect(
      screen.getByPlaceholderText(/25 milyon’dan fazla ürün içerisinde ara/i)
    ).toBeInTheDocument();
    expect(screen.getByTestId("search-query")).toHaveValue("test");
  });

  it("should change query string by input value", async () => {
    render(<Search />);

    const input = screen.getByTestId("search-query");
    fireEvent.change(input, { target: { value: "test query" } });

    expect(input).toHaveValue("test query");

    await waitFor(() => {
      expect(customQueryMock.setCustomQuery).toHaveBeenCalledWith({
        page: 1,
        q: "test query",
      });
    });
  });

  it("should not change query string if input value length less then two", async () => {
    render(<Search />);

    const input = screen.getByTestId("search-query");
    fireEvent.change(input, { target: { value: "t" } });

    expect(input).toHaveValue("t");

    await waitFor(() => {
      expect(customQueryMock.setCustomQuery).toHaveBeenCalledWith({
        q: "",
      });
    });
  });
});
