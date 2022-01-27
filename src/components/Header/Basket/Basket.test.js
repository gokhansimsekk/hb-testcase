import React from "react";

import { render, screen } from "@testing-library/react";
import Basket from "./Basket";

describe("<Basket />", () => {
  it("should render component", () => {
    render(<Basket />);
    expect(screen.getByText("basket")).toBeInTheDocument();
  });
});
