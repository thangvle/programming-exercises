import { test, expect, describe } from "bun:test";
import { anyPresent } from ".";

describe("anyPresent", () => {
  test("returns true when at least one value present", () => {
    expect(anyPresent([1, 2, 3], [4, 5, 2])).toEqual(true);
  });

  test("returns false when no values present", () => {
    expect(anyPresent([1, 2, 3], [4, 5, 6])).toEqual(false);
  });

  test("returns false for empty values array", () => {
    expect(anyPresent([1, 2, 3], [])).toEqual(false);
  });

  test("returns false for empty source array", () => {
    expect(anyPresent([], [1])).toEqual(false);
  });

  test("works with strings", () => {
    expect(anyPresent(["a", "b"], ["c", "b"])).toEqual(true);
  });
});
