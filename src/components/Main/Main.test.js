import { render, screen } from "@testing-library/react";
import Main from "./Main";

describe("<Main />", () => {
  it("should render components", () => {
    render(<Main />);

    expect(screen.getByTestId("main-top")).toBeInTheDocument(); // topbar
  });
});
