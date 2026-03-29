import { test, expect, describe } from "bun:test";
import { filterByValue } from ".";

describe("filterByValue", () => {
  test("filters values greater than threshold", () => {
    expect(filterByValue({ a: 1, b: 10, c: 5 }, (v) => v > 3)).toEqual({ b: 10, c: 5 });
  });

  test("returns empty object when nothing passes", () => {
    expect(filterByValue({ a: 1, b: 2 }, (v) => v > 10)).toEqual({});
  });

  test("returns all entries when all pass", () => {
    expect(filterByValue({ a: 5, b: 10 }, (v) => v > 0)).toEqual({ a: 5, b: 10 });
  });

  test("filters even values", () => {
    expect(filterByValue({ a: 1, b: 2, c: 3, d: 4 }, (v) => v % 2 === 0)).toEqual({ b: 2, d: 4 });
  });

  test("handles empty object", () => {
    expect(filterByValue({}, (v) => v > 0)).toEqual({});
  });
});
