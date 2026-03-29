import { test, expect, describe } from "bun:test";
import { removeFirst } from ".";

describe("removeFirst", () => {
  test("removes first occurrence only", () => {
    expect(removeFirst([1, 2, 3, 2], 2)).toEqual([1, 3, 2]);
  });

  test("returns same array when value not found", () => {
    expect(removeFirst([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  test("removes from beginning", () => {
    expect(removeFirst([1, 2, 3], 1)).toEqual([2, 3]);
  });

  test("removes from end", () => {
    expect(removeFirst([1, 2, 3], 3)).toEqual([1, 2]);
  });

  test("handles single element array", () => {
    expect(removeFirst([1], 1)).toEqual([]);
  });
});
