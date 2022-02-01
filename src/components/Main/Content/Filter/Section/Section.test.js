import { render, screen } from "utils/test-utils";
import Section from "./Section";

describe("<Section />", () => {
  it("should render colors section", () => {
    render(<Section type="color" data={[{ id: "red", title: "Red" }]} />);

    expect(screen.getByText("Renk")).toBeInTheDocument();
    expect(screen.getByText(/Red/i)).toBeInTheDocument();
  });

  it("should render sort section", () => {
    render(<Section type="sort" data={[{ id: "oldest", title: "Oldest" }]} />);

    expect(screen.getByText("Sıralama")).toBeInTheDocument();
    expect(screen.getByText(/Oldest/i)).toBeInTheDocument();
  });

  it("should render brands section", () => {
    render(<Section type="brand" data={[{ id: "apple", title: "Apple" }]} />);

    expect(screen.getByText("Marka")).toBeInTheDocument();
    expect(screen.getByText(/Apple/i)).toBeInTheDocument();
  });
});
