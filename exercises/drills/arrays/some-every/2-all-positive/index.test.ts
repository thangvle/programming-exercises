import { test, expect, describe } from "bun:test";
import { allPositive } from "./index";

describe("allPositive", () => {
  test("returns true when all numbers are positive", () => {
    expect(allPositive([1, 2, 3])).toBe(true);
  });

  test("returns false when a negative number is present", () => {
    expect(allPositive([1, -2, 3])).toBe(false);
  });

  test("returns false when zero is present", () => {
    expect(allPositive([0, 1, 2])).toBe(false);
  });

  test("returns true for a single positive number", () => {
    expect(allPositive([5])).toBe(true);
  });

  test("returns true for an empty array", () => {
    expect(allPositive([])).toBe(true);
  });
});
