import { test, expect, describe } from "bun:test";
import { evenNumbers } from ".";

describe("evenNumbers", () => {
  test("filters even numbers from mixed array", () => {
    expect(evenNumbers([1, 2, 3, 4])).toEqual([2, 4]);
  });

  test("returns empty array when no even numbers", () => {
    expect(evenNumbers([1, 3, 5])).toEqual([]);
  });

  test("keeps all even numbers", () => {
    expect(evenNumbers([2, 4, 6])).toEqual([2, 4, 6]);
  });

  test("handles zero as even", () => {
    expect(evenNumbers([0, 1, 2])).toEqual([0, 2]);
  });

  test("handles negative even numbers", () => {
    expect(evenNumbers([-2, -1, 0, 1, 2])).toEqual([-2, 0, 2]);
  });
});
