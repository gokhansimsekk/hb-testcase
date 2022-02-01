import { renderHook, act } from "@testing-library/react-hooks";
import { advanceTo } from "jest-date-mock";

import useBasket from "./useBasket";

import { useDispatch } from "react-redux";
import * as basketSlice from "store/basketSlice";

const localStorageMock = (function () {
  let store = {};

  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
  };
})();

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

const dispatchMock = jest.fn().mockImplementation(Promise.resolve());

beforeAll(() => {
  Object.defineProperty(window, "localStorage", {
    value: localStorageMock,
  });
});

beforeEach(() => {
  useDispatch.mockImplementation(() => dispatchMock);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("useBasket", () => {
  test("should add to basket", async () => {
    advanceTo(new Date(2022, 0, 1, 0, 0, 0));

    const addItemSpy = jest.spyOn(basketSlice, "addItem");

    const initialData = [{ id: 1, title: "test", image: "image.png" }];
    localStorageMock.setItem("basket", JSON.stringify(initialData));

    const { result } = renderHook(() => useBasket());

    const data = {
      id: 2,
      title: "test 2",
      image: "image2.png",
      inserttime: 1640995200000,
    };

    await act(async () => {
      await result.current.addToBasket(data);
    });

    expect(dispatchMock).toHaveBeenCalledWith(addItemSpy(data));
    localStorageMock.setItem("basket", JSON.stringify([...initialData, data]));
  });

  test("should remove from basket", async () => {
    const removeItemSpy = jest.spyOn(basketSlice, "removeItem");

    const initialData = [{ id: 1, title: "test" }];
    localStorageMock.setItem("basket", JSON.stringify(initialData));

    const { result } = renderHook(() => useBasket());

    const id = 1;

    await act(async () => {
      await result.current.removeFromBasket(id);
    });

    expect(dispatchMock).toHaveBeenCalledWith(removeItemSpy(id));
    localStorageMock.setItem(
      "basket",
      JSON.stringify(initialData.filter((item) => item.id !== id))
    );
  });
});
