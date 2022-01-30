import { render, screen } from "utils/test-utils";
import Main from "./Main";

describe("<Main />", () => {
  it("should render components", () => {
    render(<Main />);

    expect(screen.getByTestId("main-top")).toBeInTheDocument(); // topbar
  });
});
