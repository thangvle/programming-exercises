import { test, expect, describe } from "bun:test";
import { findIndexGreaterThan } from ".";

describe("findIndexGreaterThan", () => {
  test("finds index of first element > 3", () => {
    expect(findIndexGreaterThan([1, 2, 3, 4, 5], 3)).toEqual(3);
  });

  test("returns -1 when no element qualifies", () => {
    expect(findIndexGreaterThan([1, 2], 5)).toEqual(-1);
  });

  test("finds at index 0", () => {
    expect(findIndexGreaterThan([10, 20, 30], 5)).toEqual(0);
  });

  test("handles empty array", () => {
    expect(findIndexGreaterThan([], 0)).toEqual(-1);
  });

  test("does not include equal value", () => {
    expect(findIndexGreaterThan([1, 2, 3], 3)).toEqual(-1);
  });
});
