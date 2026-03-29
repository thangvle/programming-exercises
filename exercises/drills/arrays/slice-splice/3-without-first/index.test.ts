import { test, expect, describe } from "bun:test";
import { withoutFirst } from "./index";

describe("withoutFirst", () => {
  test("removes first from three elements", () => {
    expect(withoutFirst([1, 2, 3])).toEqual([2, 3]);
  });

  test("removes first from two strings", () => {
    expect(withoutFirst(["a", "b"])).toEqual(["b"]);
  });

  test("returns empty array for single element", () => {
    expect(withoutFirst([1])).toEqual([]);
  });

  test("removes first from three numbers", () => {
    expect(withoutFirst([5, 10, 15])).toEqual([10, 15]);
  });

  test("returns empty array for empty array", () => {
    expect(withoutFirst([])).toEqual([]);
  });
});
