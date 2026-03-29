import { test, expect, describe } from "bun:test";
import { findMax } from ".";

describe("findMax", () => {
  test("finds maximum in array", () => {
    expect(findMax([3, 1, 4, 1, 5])).toBe(5);
  });

  test("finds maximum in single-element array", () => {
    expect(findMax([10])).toBe(10);
  });

  test("finds maximum when last element is largest", () => {
    expect(findMax([1, 5, 10])).toBe(10);
  });

  test("finds maximum with negative numbers", () => {
    expect(findMax([-3, -2, -7, -5])).toBe(-2);
  });

  test("finds maximum when all elements are equal", () => {
    expect(findMax([4, 4, 4])).toBe(4);
  });
});
