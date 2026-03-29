import { test, expect, describe } from "bun:test";
import { sortEvenFirst } from "./index";

describe("sortEvenFirst", () => {
  test("moves evens before odds", () => {
    expect(sortEvenFirst([3, 2, 1, 4])).toEqual([2, 4, 3, 1]);
  });

  test("handles all odd numbers", () => {
    expect(sortEvenFirst([1, 3, 5])).toEqual([1, 3, 5]);
  });

  test("handles all even numbers", () => {
    expect(sortEvenFirst([2, 4, 6])).toEqual([2, 4, 6]);
  });

  test("preserves relative order within groups", () => {
    expect(sortEvenFirst([5, 2, 3, 8])).toEqual([2, 8, 5, 3]);
  });

  test("handles an empty array", () => {
    expect(sortEvenFirst([])).toEqual([]);
  });
});
