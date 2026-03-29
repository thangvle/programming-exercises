import { test, expect, describe } from "bun:test";
import { lastN } from "./index";

describe("lastN", () => {
  test("returns last 3 of 5 elements", () => {
    expect(lastN([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
  });

  test("returns last 1 element", () => {
    expect(lastN([1, 2, 3], 1)).toEqual([3]);
  });

  test("returns all when n exceeds length", () => {
    expect(lastN([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  test("works with strings", () => {
    expect(lastN(["a", "b", "c"], 2)).toEqual(["b", "c"]);
  });

  test("returns empty array when n is 0", () => {
    expect(lastN([1, 2, 3], 0)).toEqual([]);
  });
});
