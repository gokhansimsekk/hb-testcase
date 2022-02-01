import sortObjectArray from "./sortObjectArray";

describe("sortObjectArray", () => {
  it("should return asc ordered", () => {
    const arr = [
      { id: "a", title: "A" },
      { id: "b", title: "B" },
    ];

    expect(sortObjectArray(arr, "title", "asc")).toEqual([
      { id: "a", title: "A" },
      { id: "b", title: "B" },
    ]);
  });

  it("should return desc ordered", () => {
    const arr = [
      { id: "a", title: "A" },
      { id: "b", title: "B" },
    ];

    expect(sortObjectArray(arr, "title", "desc")).toEqual([
      { id: "b", title: "B" },
      { id: "a", title: "A" },
    ]);
  });

  it("should return unordered when sort by same value", () => {
    const arr = [
      { id: "a", title: "A" },
      { id: "b", title: "A" },
    ];

    expect(sortObjectArray(arr, "title")).toEqual([
      { id: "a", title: "A" },
      { id: "b", title: "A" },
    ]);
  });
});
