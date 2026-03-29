import { test, expect, describe } from "bun:test";
import { findMissing } from ".";

describe("findMissing", () => {
  test("finds missing number in sequence", () => {
    expect(findMissing([1, 2, 4, 5])).toEqual(3);
  });

  test("returns undefined when no gap", () => {
    expect(findMissing([1, 2, 3])).toBeUndefined();
  });

  test("finds missing at start of gap", () => {
    expect(findMissing([1, 3, 4, 5])).toEqual(2);
  });

  test("handles single element", () => {
    expect(findMissing([1])).toBeUndefined();
  });

  test("finds missing near end", () => {
    expect(findMissing([1, 2, 3, 5])).toEqual(4);
  });
});
