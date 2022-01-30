import productsSlice, { setData } from "./productsSlice";

describe("store > productsSlice", () => {
  it("should render the initial state", () => {
    expect(productsSlice.reducer(undefined, {})).toEqual({
      entities: {},
      ids: [],
    });
  });

  it("should set data", () => {
    const previousState = { entities: {}, ids: [] };

    expect(
      productsSlice.reducer(previousState, setData([{ id: 1, title: "Test" }]))
    ).toEqual({
      ids: [1],
      entities: {
        1: {
          id: 1,
          title: "Test",
        },
      },
    });
  });
});
