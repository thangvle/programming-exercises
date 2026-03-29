import { test, expect, describe } from "bun:test";
import { excludeValues } from ".";

describe("excludeValues", () => {
  test("removes specified numbers", () => {
    expect(excludeValues([1, 2, 3, 4, 5], [2, 4])).toEqual([1, 3, 5]);
  });

  test("removes specified strings", () => {
    expect(excludeValues(["a", "b", "c"], ["b"])).toEqual(["a", "c"]);
  });

  test("returns same array when nothing to exclude", () => {
    expect(excludeValues([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  test("returns empty when all excluded", () => {
    expect(excludeValues([1, 2], [1, 2])).toEqual([]);
  });

  test("handles empty array", () => {
    expect(excludeValues([], [1, 2])).toEqual([]);
  });
});
