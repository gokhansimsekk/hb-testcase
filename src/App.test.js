import { render, screen } from "utils/test-utils";
import App from "./App";
import Modal from "react-modal";

jest.mock("react-modal", () => ({
  default: () => null,
}));

describe("<App />", () => {
  it("should render components", () => {
    render(<App />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("main")).toBeInTheDocument();
  });
});
