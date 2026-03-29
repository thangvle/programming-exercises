import { test, expect, describe } from "bun:test";
import { pairsToObject } from ".";

describe("pairsToObject", () => {
  test("converts pairs to object", () => {
    expect(pairsToObject([["a", 1], ["b", 2]])).toEqual({ a: 1, b: 2 });
  });

  test("returns empty object for empty array", () => {
    expect(pairsToObject([])).toEqual({});
  });

  test("converts single pair", () => {
    expect(pairsToObject([["name", "Alice"]])).toEqual({ name: "Alice" });
  });

  test("converts pairs with mixed values", () => {
    expect(pairsToObject([["a", 1], ["b", "two"], ["c", true]])).toEqual({
      a: 1,
      b: "two",
      c: true,
    });
  });

  test("last pair wins for duplicate keys", () => {
    expect(pairsToObject([["a", 1], ["a", 2]])).toEqual({ a: 2 });
  });
});
