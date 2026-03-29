import { test, expect, describe } from "bun:test";
import { allEven } from "./index";

describe("allEven", () => {
  test("returns true when all numbers are even", () => {
    expect(allEven([2, 4, 6])).toBe(true);
  });

  test("returns false when an odd number is present", () => {
    expect(allEven([2, 3, 6])).toBe(false);
  });

  test("returns true for zero", () => {
    expect(allEven([0])).toBe(true);
  });

  test("returns false for a single odd number", () => {
    expect(allEven([1])).toBe(false);
  });

  test("returns true for an empty array", () => {
    expect(allEven([])).toBe(true);
  });
});
