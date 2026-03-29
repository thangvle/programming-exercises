import { test, expect, describe } from "bun:test";
import { positiveNumbers } from ".";

describe("positiveNumbers", () => {
  test("filters positive from mixed array", () => {
    expect(positiveNumbers([-1, 0, 2, 3, -5])).toEqual([2, 3]);
  });

  test("keeps all when all positive", () => {
    expect(positiveNumbers([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("returns empty when none positive", () => {
    expect(positiveNumbers([-1, -2, 0])).toEqual([]);
  });

  test("excludes zero", () => {
    expect(positiveNumbers([0])).toEqual([]);
  });

  test("handles empty array", () => {
    expect(positiveNumbers([])).toEqual([]);
  });
});
