import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("<Card />", () => {
  it("should render component", () => {
    render(
      <Card
        data={{
          id: 4,
          title: "Apple iPhone 11 Pro Max (64GB)",
          brand: "apple",
          color: "black",
          price: "124,00",
          discounted_price: "90,85",
          discount_rate: "12%",
          image:
            "https://productimages.hepsiburada.net/s/158/550/110000115797838.jpg/format:webp",
          inserttime: "2020-05-01",
        }}
      />
    );

    expect(screen.getByText(/Apple iPhone 11 Pro Max/i)).toBeInTheDocument();
    expect(screen.getByText("apple")).toBeInTheDocument();
    expect(screen.getByText("black")).toBeInTheDocument();
    expect(screen.getByText("90,85 TL")).toBeInTheDocument();
    expect(screen.getByText("124,00 TL")).toBeInTheDocument();
    expect(screen.getByText("12%")).toBeInTheDocument();
    expect(screen.getByTestId("old-price-discount-rate")).toBeInTheDocument();
  });

  it("should render just price if that not discounted", () => {
    render(
      <Card
        data={{
          id: 4,
          title: "Apple iPhone 11 Pro Max (64GB)",
          brand: "apple",
          color: "black",
          price: "124,00",
          image:
            "https://productimages.hepsiburada.net/s/158/550/110000115797838.jpg/format:webp",
          inserttime: "2020-05-01",
        }}
      />
    );

    expect(screen.getByText("124,00 TL")).toBeInTheDocument();
    expect(
      screen.queryByTestId("old-price-discount-rate")
    ).not.toBeInTheDocument();
  });
});
