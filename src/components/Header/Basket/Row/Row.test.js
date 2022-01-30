import { render, screen, fireEvent, waitFor } from "utils/test-utils";
import Row from "./Row";

describe("<Row />", () => {
  const renderer = () => render(<Row data={{ id: 1, title: "Test" }} />);
  it("should render component", () => {
    renderer();

    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  // it("should remove item from basket", async () => {
  //   renderer();

  //   const button = screen.getByTestId("remove-button");
  //   fireEvent.click(button);

  //   await waitFor(() => {
  //     expect(removeItem).toHaveBeenCalledWith(1);
  //   });
  // });
});
