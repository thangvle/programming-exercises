import { test, expect, describe } from "bun:test";
import { sum } from ".";

describe("sum", () => {
  test("sums positive numbers", () => {
    expect(sum([1, 2, 3, 4])).toEqual(10);
  });

  test("sums mixed positive and negative", () => {
    expect(sum([10, -5, 5])).toEqual(10);
  });

  test("returns 0 for empty array", () => {
    expect(sum([])).toEqual(0);
  });

  test("handles single element", () => {
    expect(sum([42])).toEqual(42);
  });

  test("sums all negative numbers", () => {
    expect(sum([-1, -2, -3])).toEqual(-6);
  });
});
