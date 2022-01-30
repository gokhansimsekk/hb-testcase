import { render, screen } from "utils/test-utils";
import Title from "./Title";

describe("<Title />", () => {
  it("should render component", () => {
    render(<Title />);

    expect(screen.getByText(/iPhone iOS cep telefonu/i)).toBeInTheDocument();
  });
});
