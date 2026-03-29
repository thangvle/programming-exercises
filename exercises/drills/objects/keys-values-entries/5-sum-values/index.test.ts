import { test, expect, describe } from "bun:test";
import { sumValues } from ".";

describe("sumValues", () => {
  test("sums values of a simple object", () => {
    expect(sumValues({ a: 1, b: 2, c: 3 })).toBe(6);
  });

  test("returns 0 for empty object", () => {
    expect(sumValues({})).toBe(0);
  });

  test("sums single value", () => {
    expect(sumValues({ x: 42 })).toBe(42);
  });

  test("sums negative values", () => {
    expect(sumValues({ a: -1, b: -2, c: 3 })).toBe(0);
  });

  test("sums decimal values", () => {
    expect(sumValues({ a: 1.5, b: 2.5 })).toBe(4);
  });
});
