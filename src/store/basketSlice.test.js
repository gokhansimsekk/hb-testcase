import basketSlice, { addItem, removeItem } from "./basketSlice";

describe("store > basketSlice", () => {
  it("should render the initial state", () => {
    expect(basketSlice.reducer(undefined, {})).toEqual({
      currentItem: null,
      entities: {},
      ids: [],
    });
  });

  it("should add item", () => {
    const previousState = { entities: {}, ids: [] };

    expect(
      basketSlice.reducer(
        previousState,
        addItem({
          id: 1,
          title: "Test",
          inserttime: new Date().toLocaleString(),
        })
      )
    ).toEqual({
      ids: [1],
      entities: {
        1: {
          id: 1,
          title: "Test",
          inserttime: new Date().toLocaleString(),
        },
      },
    });
  });

  it("should remove item", () => {
    const previousState = {
      entities: {
        1: {
          id: 1,
          title: "Test",
        },
      },
      ids: [1],
    };

    expect(basketSlice.reducer(previousState, removeItem(1))).toEqual({
      ids: [],
      entities: {},
    });
  });
});
