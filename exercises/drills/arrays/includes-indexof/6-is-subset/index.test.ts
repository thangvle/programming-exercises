import { test, expect, describe } from "bun:test";
import { isSubset } from ".";

describe("isSubset", () => {
  test("returns true when first is subset of second", () => {
    expect(isSubset([1, 2], [1, 2, 3, 4])).toEqual(true);
  });

  test("returns false when not a subset", () => {
    expect(isSubset([1, 5], [1, 2, 3])).toEqual(false);
  });

  test("empty array is always a subset", () => {
    expect(isSubset([], [1, 2, 3])).toEqual(true);
  });

  test("equal arrays are subsets of each other", () => {
    expect(isSubset([1, 2, 3], [1, 2, 3])).toEqual(true);
  });

  test("non-empty array is not subset of empty array", () => {
    expect(isSubset([1], [])).toEqual(false);
  });
});
