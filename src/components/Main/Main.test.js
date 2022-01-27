import { render, screen } from "@testing-library/react";
import Main from "./Main";

describe("<Main />", () => {
  it("should render component", () => {
    render(<Main />);
    expect(screen.getByTestId("main")).toBeInTheDocument();
  });
});
