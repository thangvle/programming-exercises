import { test, expect, describe } from "bun:test";
import { missingElements } from ".";

describe("missingElements", () => {
  test("finds missing elements", () => {
    expect(missingElements([1, 2, 3, 4], [2, 4])).toEqual([1, 3]);
  });

  test("returns empty when all present", () => {
    expect(missingElements([1, 2], [1, 2])).toEqual([]);
  });

  test("returns all when none in second array", () => {
    expect(missingElements([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  test("handles empty first array", () => {
    expect(missingElements([], [1, 2])).toEqual([]);
  });

  test("works with strings", () => {
    expect(missingElements(["a", "b", "c"], ["b"])).toEqual(["a", "c"]);
  });
});
