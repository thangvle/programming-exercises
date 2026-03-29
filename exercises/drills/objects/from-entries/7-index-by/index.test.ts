import { test, expect, describe } from "bun:test";
import { indexBy } from ".";

describe("indexBy", () => {
  test("indexes by id", () => {
    expect(indexBy([{ id: 1, name: "A" }, { id: 2, name: "B" }], "id")).toEqual({
      1: { id: 1, name: "A" },
      2: { id: 2, name: "B" },
    });
  });

  test("returns empty object for empty array", () => {
    expect(indexBy([], "id")).toEqual({});
  });

  test("indexes single item", () => {
    expect(indexBy([{ id: 5, val: "x" }], "id")).toEqual({
      5: { id: 5, val: "x" },
    });
  });

  test("indexes by name", () => {
    expect(indexBy([{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }], "name")).toEqual({
      Alice: { name: "Alice", age: 30 },
      Bob: { name: "Bob", age: 25 },
    });
  });

  test("last item wins for duplicate keys", () => {
    expect(indexBy([{ id: 1, v: "first" }, { id: 1, v: "second" }], "id")).toEqual({
      1: { id: 1, v: "second" },
    });
  });
});
