import { test, expect, describe } from "bun:test";
import { uniqueValues } from ".";

describe("uniqueValues", () => {
  test("removes duplicate numbers", () => {
    expect(uniqueValues([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
  });

  test("removes duplicate strings", () => {
    expect(uniqueValues(["a", "b", "a"])).toEqual(["a", "b"]);
  });

  test("returns same array when no duplicates", () => {
    expect(uniqueValues([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("handles empty array", () => {
    expect(uniqueValues([])).toEqual([]);
  });

  test("handles single element", () => {
    expect(uniqueValues([5])).toEqual([5]);
  });
});
