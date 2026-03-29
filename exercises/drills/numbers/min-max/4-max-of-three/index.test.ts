import { test, expect, describe } from "bun:test";
import { maxOfThree } from ".";

describe("maxOfThree", () => {
  test("finds max when middle is largest", () => {
    expect(maxOfThree(3, 7, 5)).toBe(7);
  });

  test("returns value when all are equal", () => {
    expect(maxOfThree(1, 1, 1)).toBe(1);
  });

  test("finds max when first is largest", () => {
    expect(maxOfThree(10, 5, 3)).toBe(10);
  });

  test("finds max when last is largest", () => {
    expect(maxOfThree(1, 2, 9)).toBe(9);
  });

  test("handles negative numbers", () => {
    expect(maxOfThree(-1, -5, -3)).toBe(-1);
  });
});
