import { test, expect, describe } from "bun:test";
import { rangeSize } from ".";

describe("rangeSize", () => {
  test("finds range of mixed values", () => {
    expect(rangeSize([3, 1, 4, 1, 5])).toBe(4);
  });

  test("returns 0 when all values are equal", () => {
    expect(rangeSize([5, 5, 5])).toBe(0);
  });

  test("finds range of single element", () => {
    expect(rangeSize([7])).toBe(0);
  });

  test("finds range with negative numbers", () => {
    expect(rangeSize([-10, 0, 10])).toBe(20);
  });

  test("finds range of two elements", () => {
    expect(rangeSize([1, 100])).toBe(99);
  });
});
