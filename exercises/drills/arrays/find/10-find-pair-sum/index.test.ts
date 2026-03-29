import { test, expect, describe } from "bun:test";
import { findPairSum } from ".";

describe("findPairSum", () => {
  test("finds pair that sums to target", () => {
    const result = findPairSum([1, 2, 3, 4], 5);
    expect(result).toBeDefined();
    expect(result![0] + result![1]).toEqual(5);
  });

  test("returns undefined when no pair found", () => {
    expect(findPairSum([1, 2], 10)).toBeUndefined();
  });

  test("finds pair with negative numbers", () => {
    const result = findPairSum([-1, 0, 1, 2], 1);
    expect(result).toBeDefined();
    expect(result![0] + result![1]).toEqual(1);
  });

  test("handles empty array", () => {
    expect(findPairSum([], 5)).toBeUndefined();
  });

  test("finds pair summing to zero", () => {
    const result = findPairSum([1, -1, 2, -2], 0);
    expect(result).toBeDefined();
    expect(result![0] + result![1]).toEqual(0);
  });
});
