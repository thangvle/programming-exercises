import { test, expect, describe } from "bun:test";
import { hasNegative } from "./index";

describe("hasNegative", () => {
  test("returns true when array contains a negative number", () => {
    expect(hasNegative([1, -2, 3])).toBe(true);
  });

  test("returns false when all numbers are positive", () => {
    expect(hasNegative([1, 2, 3])).toBe(false);
  });

  test("returns true for a single negative number", () => {
    expect(hasNegative([-1])).toBe(true);
  });

  test("returns false for all zeros", () => {
    expect(hasNegative([0, 0, 0])).toBe(false);
  });

  test("returns false for an empty array", () => {
    expect(hasNegative([])).toBe(false);
  });
});
