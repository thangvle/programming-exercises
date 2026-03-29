import { test, expect, describe } from "bun:test";
import { runningTotal } from ".";

describe("runningTotal", () => {
  test("computes running total", () => {
    expect(runningTotal([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
  });

  test("handles equal values", () => {
    expect(runningTotal([5, 5, 5])).toEqual([5, 10, 15]);
  });

  test("handles single element", () => {
    expect(runningTotal([10])).toEqual([10]);
  });

  test("handles empty array", () => {
    expect(runningTotal([])).toEqual([]);
  });

  test("handles negative numbers", () => {
    expect(runningTotal([1, -1, 2, -2])).toEqual([1, 0, 2, 0]);
  });
});
