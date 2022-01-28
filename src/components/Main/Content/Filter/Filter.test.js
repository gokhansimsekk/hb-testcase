import { render, screen } from "@testing-library/react";
import Filter from "./Filter";

describe("<Filter />", () => {
  it("should render components", () => {
    render(<Filter />);

    expect(screen.getByText("Renk")).toBeInTheDocument(); // colors section
    expect(screen.getByText("Sıralama")).toBeInTheDocument(); // sort section
    expect(screen.getByText("Marka")).toBeInTheDocument(); // brands section
  });
});
