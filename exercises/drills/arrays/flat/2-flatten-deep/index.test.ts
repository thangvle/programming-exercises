import { test, expect, describe } from "bun:test";
import { flattenDeep } from "./index";

describe("flattenDeep", () => {
  test("flattens deeply nested numbers", () => {
    expect(flattenDeep([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
  });

  test("flattens varying nesting depths", () => {
    expect(flattenDeep([[1], [[2]], [[[3]]]])).toEqual([1, 2, 3]);
  });

  test("handles already flat array", () => {
    expect(flattenDeep([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("flattens mixed strings", () => {
    expect(flattenDeep([["a", ["b"]], "c"])).toEqual(["a", "b", "c"]);
  });

  test("handles an empty array", () => {
    expect(flattenDeep([])).toEqual([]);
  });
});
