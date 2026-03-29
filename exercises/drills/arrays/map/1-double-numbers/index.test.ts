import { test, expect, describe } from "bun:test";
import { doubleNumbers } from ".";

describe("doubleNumbers", () => {
  test("doubles positive numbers", () => {
    expect(doubleNumbers([1, 2, 3])).toEqual([2, 4, 6]);
  });

  test("handles zero", () => {
    expect(doubleNumbers([0, 5, 0])).toEqual([0, 10, 0]);
  });

  test("doubles negative numbers", () => {
    expect(doubleNumbers([-1, -2, -3])).toEqual([-2, -4, -6]);
  });

  test("returns empty array for empty input", () => {
    expect(doubleNumbers([])).toEqual([]);
  });

  test("doubles single element", () => {
    expect(doubleNumbers([7])).toEqual([14]);
  });
});
