import { test, expect, describe } from "bun:test";
import { anyDivisibleBy } from "./index";

describe("anyDivisibleBy", () => {
  test("returns true when a number is divisible by n", () => {
    expect(anyDivisibleBy([3, 5, 7], 5)).toBe(true);
  });

  test("returns false when no number is divisible by n", () => {
    expect(anyDivisibleBy([3, 7, 11], 5)).toBe(false);
  });

  test("returns true for multiple divisible numbers", () => {
    expect(anyDivisibleBy([10, 20], 5)).toBe(true);
  });

  test("returns false for small numbers with large divisor", () => {
    expect(anyDivisibleBy([1, 2, 3], 4)).toBe(false);
  });

  test("returns false for an empty array", () => {
    expect(anyDivisibleBy([], 3)).toBe(false);
  });
});
