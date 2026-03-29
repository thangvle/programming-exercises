import { test, expect, describe } from "bun:test";
import { firstN } from "./index";

describe("firstN", () => {
  test("returns first 3 of 5 elements", () => {
    expect(firstN([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
  });

  test("returns first 1 element", () => {
    expect(firstN([1, 2, 3], 1)).toEqual([1]);
  });

  test("returns all when n exceeds length", () => {
    expect(firstN([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  test("works with strings", () => {
    expect(firstN(["a", "b", "c"], 2)).toEqual(["a", "b"]);
  });

  test("returns empty array when n is 0", () => {
    expect(firstN([1, 2, 3], 0)).toEqual([]);
  });
});
