import { test, expect, describe } from "bun:test";
import { flatten } from ".";

describe("flatten", () => {
  test("flattens number arrays", () => {
    expect(flatten([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
  });

  test("flattens string arrays", () => {
    expect(flatten([["a"], ["b", "c"]])).toEqual(["a", "b", "c"]);
  });

  test("handles empty sub-arrays", () => {
    expect(flatten([[1], [], [2, 3]])).toEqual([1, 2, 3]);
  });

  test("handles empty outer array", () => {
    expect(flatten([])).toEqual([]);
  });

  test("handles single sub-array", () => {
    expect(flatten([[1, 2, 3]])).toEqual([1, 2, 3]);
  });
});
