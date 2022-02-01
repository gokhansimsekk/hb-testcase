import { render, screen } from "utils/test-utils";
import Title from "./Title";

import useCustomQuery from "hooks/useCustomQuery";

jest.mock("hooks/useCustomQuery");

describe("<Title />", () => {
  const customQueryMock = (q) => ({
    customQuery: {
      q,
    },
  });

  it("should render component", () => {
    useCustomQuery.mockImplementation(() => customQueryMock(""));

    render(<Title />);

    expect(screen.getByText(/cep telefonu/i)).toBeInTheDocument();
    expect(screen.getByTestId("search-query")).toHaveClass("invisible");
  });

  it("should show search query", () => {
    useCustomQuery.mockImplementation(() => customQueryMock("test query"));

    render(<Title />);

    expect(screen.queryByTestId("search-query")).not.toHaveClass("invisible");
  });
});
