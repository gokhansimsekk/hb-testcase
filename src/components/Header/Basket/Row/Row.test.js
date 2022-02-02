import { render, screen } from "utils/test-utils";
import Row from "./Row";

describe("<Row />", () => {
  const renderer = () => render(<Row data={{ id: 1, title: "Test" }} />);
  it("should render component", () => {
    renderer();

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
