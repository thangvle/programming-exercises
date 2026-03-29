import { test, expect, describe } from "bun:test";
import { maxNumber } from ".";

describe("maxNumber", () => {
  test("finds max in mixed array", () => {
    expect(maxNumber([3, 1, 4, 1, 5])).toEqual(5);
  });

  test("finds max in negative numbers", () => {
    expect(maxNumber([-1, -5, -2])).toEqual(-1);
  });

  test("handles single element", () => {
    expect(maxNumber([42])).toEqual(42);
  });

  test("finds max when it's first", () => {
    expect(maxNumber([100, 1, 2, 3])).toEqual(100);
  });

  test("handles duplicates of max value", () => {
    expect(maxNumber([5, 5, 3, 5])).toEqual(5);
  });
});
