import { test, expect, describe } from "bun:test";
import { findIndexOf } from ".";

describe("findIndexOf", () => {
  test("finds index of existing element", () => {
    expect(findIndexOf([10, 20, 30], 20)).toEqual(1);
  });

  test("returns -1 when not found", () => {
    expect(findIndexOf([1, 2, 3], 5)).toEqual(-1);
  });

  test("finds first occurrence", () => {
    expect(findIndexOf([1, 2, 1, 2], 2)).toEqual(1);
  });

  test("finds element at index 0", () => {
    expect(findIndexOf([5, 10, 15], 5)).toEqual(0);
  });

  test("handles empty array", () => {
    expect(findIndexOf([], 1)).toEqual(-1);
  });
});
