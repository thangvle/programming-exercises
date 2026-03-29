import { test, expect, describe } from "bun:test";
import { countItems } from ".";

describe("countItems", () => {
  test("counts occurrences of each item", () => {
    expect(countItems(["a", "b", "a", "c", "b", "a"])).toEqual({ a: 3, b: 2, c: 1 });
  });

  test("returns empty object for empty array", () => {
    expect(countItems([])).toEqual({});
  });

  test("counts single item", () => {
    expect(countItems(["x"])).toEqual({ x: 1 });
  });

  test("counts when all items are the same", () => {
    expect(countItems(["a", "a", "a"])).toEqual({ a: 3 });
  });

  test("counts when all items are unique", () => {
    expect(countItems(["a", "b", "c"])).toEqual({ a: 1, b: 1, c: 1 });
  });
});
