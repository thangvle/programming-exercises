import { test, expect, describe } from "bun:test";
import { inRange } from ".";

describe("inRange", () => {
  test("keeps numbers within range", () => {
    expect(inRange([1, 5, 10, 15, 20], 5, 15)).toEqual([5, 10, 15]);
  });

  test("range boundaries are inclusive", () => {
    expect(inRange([1, 2, 3], 1, 3)).toEqual([1, 2, 3]);
  });

  test("returns empty when nothing in range", () => {
    expect(inRange([1, 2, 3], 10, 20)).toEqual([]);
  });

  test("handles single value range", () => {
    expect(inRange([1, 2, 3, 4, 5], 3, 3)).toEqual([3]);
  });

  test("handles empty array", () => {
    expect(inRange([], 0, 10)).toEqual([]);
  });
});
