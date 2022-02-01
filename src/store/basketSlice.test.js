import basketSlice, { addItem, removeItem, setData } from "./basketSlice";

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
    const nextState = {
      ids: [1],
      entities: {
        1: {
          id: 1,
          title: "Test",
        },
      },
    };

    expect(
      basketSlice.reducer(
        previousState,
        addItem({
          id: 1,
          title: "Test",
        })
      )
    ).toEqual(nextState);
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
    const nextState = {
      entities: {},
      ids: [],
    };

    expect(basketSlice.reducer(previousState, removeItem(1))).toEqual(
      nextState
    );
  });

  it("should set data", () => {
    const previousState = {
      entities: {},
      ids: [],
    };
    const nextState = {
      ids: [1],
      entities: {
        1: {
          id: 1,
          title: "Test",
        },
      },
    };

    expect(
      basketSlice.reducer(previousState, setData([{ id: 1, title: "Test" }]))
    ).toEqual(nextState);
  });
});
