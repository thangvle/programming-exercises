import { test, expect, describe } from "bun:test";
import { squareNumbers } from ".";

describe("squareNumbers", () => {
  test("squares positive numbers", () => {
    expect(squareNumbers([1, 2, 3])).toEqual([1, 4, 9]);
  });

  test("handles zero", () => {
    expect(squareNumbers([0, 5])).toEqual([0, 25]);
  });

  test("squares negative numbers", () => {
    expect(squareNumbers([-1, -2, -3])).toEqual([1, 4, 9]);
  });

  test("returns empty array for empty input", () => {
    expect(squareNumbers([])).toEqual([]);
  });

  test("handles single element", () => {
    expect(squareNumbers([10])).toEqual([100]);
  });
});
