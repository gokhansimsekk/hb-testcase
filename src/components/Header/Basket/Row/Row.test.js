import { render, screen, fireEvent } from "utils/test-utils";
import Row from "./Row";
import useBasket from "hooks/useBasket";

jest.mock("hooks/useBasket");

const basketMock = {
  removeFromBasket: jest.fn(),
};

beforeEach(() => {
  useBasket.mockImplementation(() => basketMock);
});

describe("<Row />", () => {
  const renderer = () => render(<Row data={{ id: 1, title: "Test" }} />);
  it("should render component", () => {
    renderer();

    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("should call remove from basket hook", () => {
    renderer();

    const button = screen.getByTestId("remove-button");
    fireEvent.click(button);

    expect(basketMock.removeFromBasket).toHaveBeenCalledWith(1);
  });
});
