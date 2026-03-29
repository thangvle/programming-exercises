import { test, expect, describe } from "bun:test";
import { noneMatch } from "./index";

describe("noneMatch", () => {
  test("returns true when value is not in the array", () => {
    expect(noneMatch([1, 2, 3], 4)).toBe(true);
  });

  test("returns false when value is in the array", () => {
    expect(noneMatch([1, 2, 3], 2)).toBe(false);
  });

  test("returns true for strings not in the array", () => {
    expect(noneMatch(["a", "b"], "c")).toBe(true);
  });

  test("returns false for strings in the array", () => {
    expect(noneMatch(["a", "b"], "a")).toBe(false);
  });

  test("returns true for an empty array", () => {
    expect(noneMatch([], 1)).toBe(true);
  });
});
