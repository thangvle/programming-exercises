import { test, expect, describe } from "bun:test";
import { allSame } from "./index";

describe("allSame", () => {
  test("returns true when all numbers are the same", () => {
    expect(allSame([1, 1, 1])).toBe(true);
  });

  test("returns false when numbers differ", () => {
    expect(allSame([1, 2, 1])).toBe(false);
  });

  test("returns true when all strings are the same", () => {
    expect(allSame(["a", "a", "a"])).toBe(true);
  });

  test("returns true for a single element", () => {
    expect(allSame([5])).toBe(true);
  });

  test("returns true for an empty array", () => {
    expect(allSame([])).toBe(true);
  });
});
