import { test, expect, describe } from "bun:test";
import { getLengths } from ".";

describe("getLengths", () => {
  test("gets lengths of various strings", () => {
    expect(getLengths(["hi", "hello"])).toEqual([2, 5]);
  });

  test("handles empty strings", () => {
    expect(getLengths(["", "a", ""])).toEqual([0, 1, 0]);
  });

  test("handles single string", () => {
    expect(getLengths(["test"])).toEqual([4]);
  });

  test("returns empty array for empty input", () => {
    expect(getLengths([])).toEqual([]);
  });

  test("handles long strings", () => {
    expect(getLengths(["a", "bb", "ccc", "dddd"])).toEqual([1, 2, 3, 4]);
  });
});
