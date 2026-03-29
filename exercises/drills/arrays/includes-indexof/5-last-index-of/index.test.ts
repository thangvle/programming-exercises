import { test, expect, describe } from "bun:test";
import { lastPositionOf } from ".";

describe("lastPositionOf", () => {
  test("finds last position of value", () => {
    expect(lastPositionOf([1, 2, 3, 2, 1], 2)).toEqual(3);
  });

  test("returns -1 when not found", () => {
    expect(lastPositionOf([1, 2, 3], 5)).toEqual(-1);
  });

  test("returns same as indexOf for unique value", () => {
    expect(lastPositionOf([1, 2, 3], 2)).toEqual(1);
  });

  test("handles empty array", () => {
    expect(lastPositionOf([], 1)).toEqual(-1);
  });

  test("finds last occurrence at end", () => {
    expect(lastPositionOf([1, 1, 1], 1)).toEqual(2);
  });
});
