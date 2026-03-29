import { test, expect, describe } from "bun:test";
import { closestTo } from ".";

describe("closestTo", () => {
  test("finds closest to 8 in [1,5,10,15]", () => {
    expect(closestTo([1, 5, 10, 15], 8)).toBe(10);
  });

  test("finds closest to 3 in [1,5,10]", () => {
    expect(closestTo([1, 5, 10], 3)).toBe(5);
  });

  test("returns exact match", () => {
    expect(closestTo([1, 5, 10], 5)).toBe(5);
  });

  test("finds closest in single-element array", () => {
    expect(closestTo([42], 100)).toBe(42);
  });

  test("finds closest with negative target", () => {
    expect(closestTo([-10, -5, 0, 5], -3)).toBe(-5);
  });
});
