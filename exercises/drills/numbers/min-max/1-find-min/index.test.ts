import { test, expect, describe } from "bun:test";
import { findMin } from ".";

describe("findMin", () => {
  test("finds minimum in array", () => {
    expect(findMin([3, 1, 4, 1, 5])).toBe(1);
  });

  test("finds minimum in single-element array", () => {
    expect(findMin([10])).toBe(10);
  });

  test("finds minimum when first element is smallest", () => {
    expect(findMin([1, 5, 10])).toBe(1);
  });

  test("finds minimum with negative numbers", () => {
    expect(findMin([3, -2, 7, -5])).toBe(-5);
  });

  test("finds minimum when all elements are equal", () => {
    expect(findMin([4, 4, 4])).toBe(4);
  });
});
