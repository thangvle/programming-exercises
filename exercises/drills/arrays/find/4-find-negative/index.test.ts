import { test, expect, describe } from "bun:test";
import { findNegative } from ".";

describe("findNegative", () => {
  test("finds first negative number", () => {
    expect(findNegative([1, 2, -3, 4])).toEqual(-3);
  });

  test("returns undefined when no negatives", () => {
    expect(findNegative([1, 2, 3])).toBeUndefined();
  });

  test("finds negative at start", () => {
    expect(findNegative([-1, 2, 3])).toEqual(-1);
  });

  test("handles empty array", () => {
    expect(findNegative([])).toBeUndefined();
  });

  test("does not treat zero as negative", () => {
    expect(findNegative([0, 1, 2])).toBeUndefined();
  });
});
