import { test, expect, describe } from "bun:test";
import { minOfTwo } from ".";

describe("minOfTwo", () => {
  test("returns smaller when first is smaller", () => {
    expect(minOfTwo(3, 7)).toBe(3);
  });

  test("returns smaller when second is smaller", () => {
    expect(minOfTwo(10, 2)).toBe(2);
  });

  test("returns the value when both are equal", () => {
    expect(minOfTwo(5, 5)).toBe(5);
  });

  test("handles negative numbers", () => {
    expect(minOfTwo(-3, -7)).toBe(-7);
  });

  test("handles zero and positive", () => {
    expect(minOfTwo(0, 1)).toBe(0);
  });
});
