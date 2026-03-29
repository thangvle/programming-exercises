import { test, expect, describe } from "bun:test";
import { frequencyCount } from ".";

describe("frequencyCount", () => {
  test("counts string occurrences", () => {
    expect(frequencyCount(["a", "b", "a", "c", "b", "a"])).toEqual({
      a: 3,
      b: 2,
      c: 1,
    });
  });

  test("counts number occurrences", () => {
    expect(frequencyCount([1, 1, 2])).toEqual({ 1: 2, 2: 1 });
  });

  test("handles single element", () => {
    expect(frequencyCount(["x"])).toEqual({ x: 1 });
  });

  test("handles empty array", () => {
    expect(frequencyCount([])).toEqual({});
  });

  test("handles all unique values", () => {
    expect(frequencyCount(["a", "b", "c"])).toEqual({ a: 1, b: 1, c: 1 });
  });
});
