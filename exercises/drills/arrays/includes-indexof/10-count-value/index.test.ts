import { test, expect, describe } from "bun:test";
import { countValue } from ".";

describe("countValue", () => {
  test("counts occurrences of value", () => {
    expect(countValue([1, 2, 2, 3, 2], 2)).toEqual(3);
  });

  test("returns 0 when value not present", () => {
    expect(countValue([1, 2, 3], 5)).toEqual(0);
  });

  test("counts single occurrence", () => {
    expect(countValue([1, 2, 3], 1)).toEqual(1);
  });

  test("handles empty array", () => {
    expect(countValue([], 1)).toEqual(0);
  });

  test("counts string occurrences", () => {
    expect(countValue(["a", "b", "a", "a"], "a")).toEqual(3);
  });
});
