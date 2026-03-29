import { test, expect, describe } from "bun:test";
import { findFirstEven } from ".";

describe("findFirstEven", () => {
  test("finds first even in mixed array", () => {
    expect(findFirstEven([1, 3, 4, 6])).toEqual(4);
  });

  test("returns undefined when no even numbers", () => {
    expect(findFirstEven([1, 3, 5])).toBeUndefined();
  });

  test("returns first element if even", () => {
    expect(findFirstEven([2, 3, 4])).toEqual(2);
  });

  test("handles empty array", () => {
    expect(findFirstEven([])).toBeUndefined();
  });

  test("finds zero as even", () => {
    expect(findFirstEven([1, 0, 3])).toEqual(0);
  });
});
