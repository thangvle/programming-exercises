import { test, expect, describe } from "bun:test";
import { hasPairSum } from "./index";

describe("hasPairSum", () => {
  test("returns true when a pair sums to the target", () => {
    expect(hasPairSum([1, 2, 3, 4], 5)).toBe(true);
  });

  test("returns false when no pair sums to the target", () => {
    expect(hasPairSum([1, 2, 3], 10)).toBe(false);
  });

  test("returns true for duplicate numbers summing to target", () => {
    expect(hasPairSum([5, 5], 10)).toBe(true);
  });

  test("returns false for a single element", () => {
    expect(hasPairSum([1], 2)).toBe(false);
  });

  test("returns false for an empty array", () => {
    expect(hasPairSum([], 5)).toBe(false);
  });
});
