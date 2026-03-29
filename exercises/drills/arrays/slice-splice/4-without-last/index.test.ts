import { test, expect, describe } from "bun:test";
import { withoutLast } from "./index";

describe("withoutLast", () => {
  test("removes last from three elements", () => {
    expect(withoutLast([1, 2, 3])).toEqual([1, 2]);
  });

  test("removes last from two strings", () => {
    expect(withoutLast(["a", "b"])).toEqual(["a"]);
  });

  test("returns empty array for single element", () => {
    expect(withoutLast([1])).toEqual([]);
  });

  test("removes last from three numbers", () => {
    expect(withoutLast([5, 10, 15])).toEqual([5, 10]);
  });

  test("returns empty array for empty array", () => {
    expect(withoutLast([])).toEqual([]);
  });
});
