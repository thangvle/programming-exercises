import { test, expect, describe } from "bun:test";
import { median } from "./index";

describe("median", () => {
  test("returns middle value for odd-length array", () => {
    expect(median([3, 1, 2])).toBe(2);
  });

  test("returns average of two middles for even-length array", () => {
    expect(median([4, 1, 2, 3])).toBe(2.5);
  });

  test("returns the single element", () => {
    expect(median([5])).toBe(5);
  });

  test("returns average for two elements", () => {
    expect(median([1, 2])).toBe(1.5);
  });

  test("handles larger odd-length array", () => {
    expect(median([7, 1, 3, 5, 9])).toBe(5);
  });
});
