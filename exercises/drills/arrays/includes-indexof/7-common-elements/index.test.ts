import { test, expect, describe } from "bun:test";
import { commonElements } from ".";

describe("commonElements", () => {
  test("finds common elements", () => {
    expect(commonElements([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  test("returns empty when no common elements", () => {
    expect(commonElements([1, 2], [3, 4])).toEqual([]);
  });

  test("returns all when arrays are identical", () => {
    expect(commonElements([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("handles empty first array", () => {
    expect(commonElements([], [1, 2])).toEqual([]);
  });

  test("works with strings", () => {
    expect(commonElements(["a", "b", "c"], ["b", "d"])).toEqual(["b"]);
  });
});
