import { test, expect, describe } from "bun:test";
import { mergeArrays } from "./index";

describe("mergeArrays", () => {
  test("merges three arrays of numbers", () => {
    expect(mergeArrays([[1], [2, 3], [4, 5, 6]])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("merges arrays of strings", () => {
    expect(mergeArrays([["a"], ["b", "c"]])).toEqual(["a", "b", "c"]);
  });

  test("handles a single array", () => {
    expect(mergeArrays([[1, 2]])).toEqual([1, 2]);
  });

  test("handles empty sub-arrays", () => {
    expect(mergeArrays([[], [1], []])).toEqual([1]);
  });

  test("handles an empty outer array", () => {
    expect(mergeArrays([])).toEqual([]);
  });
});
