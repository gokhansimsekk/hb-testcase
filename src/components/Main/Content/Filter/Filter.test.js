import { render, screen } from "utils/test-utils";
import Filter from "./Filter";

describe("<Filter />", () => {
  it("should render components", () => {
    render(<Filter />);

    expect(screen.getByText("Renk")).toBeInTheDocument(); // colors section
    expect(screen.getByText("Sıralama")).toBeInTheDocument(); // sort section
    expect(screen.getByText("Marka")).toBeInTheDocument(); // brands section
  });

  it("should render brands and colors", () => {
    render(<Filter />, {
      initialState: {
        products: {
          ids: [1, 2, 3, 4],
          entities: {
            1: {
              id: 1,
              title: "Test 1",
              color: "red",
              brand: "brand 1",
            },
            2: {
              id: 2,
              title: "Test 2",
              color: "red",
              brand: "brand 2",
            },
            3: {
              id: 3,
              title: "Test 3",
              color: "blue",
              brand: "brand 2",
            },
            4: {
              id: 4,
              title: "Test 4",
              color: "blue",
              brand: "brand 2",
            },
          },
        },
      },
    });

    expect(screen.getByText("red (2)")).toBeInTheDocument();
    expect(screen.getByText("blue (2)")).toBeInTheDocument();
    expect(screen.getByText("brand 1 (1)")).toBeInTheDocument();
    expect(screen.getByText("brand 2 (3)")).toBeInTheDocument();
  });
});
