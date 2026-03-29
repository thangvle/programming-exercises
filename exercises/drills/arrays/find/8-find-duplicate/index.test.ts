import { test, expect, describe } from "bun:test";
import { findDuplicate } from ".";

describe("findDuplicate", () => {
  test("finds first duplicate", () => {
    expect(findDuplicate([1, 2, 3, 2, 4])).toEqual(2);
  });

  test("returns undefined when no duplicates", () => {
    expect(findDuplicate([1, 2, 3])).toBeUndefined();
  });

  test("finds duplicate strings", () => {
    expect(findDuplicate(["a", "b", "a"])).toEqual("a");
  });

  test("handles empty array", () => {
    expect(findDuplicate([])).toBeUndefined();
  });

  test("finds first of multiple duplicates", () => {
    expect(findDuplicate([1, 2, 3, 1, 2])).toEqual(1);
  });
});
