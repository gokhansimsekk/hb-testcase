import { render, screen, fireEvent } from "utils/test-utils";
import RemoveModal from "./RemoveModal";
import useBasket from "hooks/useBasket";

jest.mock("hooks/useBasket");

const basketMock = {
  removeFromBasket: jest.fn(),
};

beforeEach(() => {
  useBasket.mockImplementation(() => basketMock);
});

const onClose = jest.fn();

describe("<RemoveModal />", () => {
  const renderer = () =>
    render(
      <RemoveModal
        isOpen={true}
        data={{ id: 1, title: "Test" }}
        onClose={onClose}
      />
    );

  it("should render component", () => {
    renderer();

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
  it("should call remove from basket hook", () => {
    renderer();

    const button = screen.getByTestId("accept-button");
    fireEvent.click(button);

    expect(basketMock.removeFromBasket).toHaveBeenCalledWith(1);
  });

  it("should call onClose", () => {
    renderer();

    const button = screen.getByTestId("cancel-button");
    fireEvent.click(button);

    expect(onClose).toHaveBeenCalled();
  });
});
