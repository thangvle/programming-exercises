import { test, expect, describe } from "bun:test";
import { hasValue } from ".";

describe("hasValue", () => {
  test("returns true when value exists", () => {
    expect(hasValue([1, 2, 3], 2)).toEqual(true);
  });

  test("returns false when value does not exist", () => {
    expect(hasValue([1, 2, 3], 5)).toEqual(false);
  });

  test("works with strings", () => {
    expect(hasValue(["a", "b", "c"], "b")).toEqual(true);
  });

  test("handles empty array", () => {
    expect(hasValue([], 1)).toEqual(false);
  });

  test("finds value at end of array", () => {
    expect(hasValue([1, 2, 3, 4, 5], 5)).toEqual(true);
  });
});
