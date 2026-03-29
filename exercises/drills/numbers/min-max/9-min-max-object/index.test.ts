import { test, expect, describe } from "bun:test";
import { minMax } from ".";

describe("minMax", () => {
  test("returns min and max of array", () => {
    expect(minMax([3, 1, 4])).toEqual({ min: 1, max: 4 });
  });

  test("returns same value for single-element array", () => {
    expect(minMax([5])).toEqual({ min: 5, max: 5 });
  });

  test("handles already sorted array", () => {
    expect(minMax([1, 2, 3, 4, 5])).toEqual({ min: 1, max: 5 });
  });

  test("handles negative numbers", () => {
    expect(minMax([-10, 0, 10])).toEqual({ min: -10, max: 10 });
  });

  test("handles all equal values", () => {
    expect(minMax([7, 7, 7])).toEqual({ min: 7, max: 7 });
  });
});
