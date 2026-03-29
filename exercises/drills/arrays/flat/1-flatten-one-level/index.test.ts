import { test, expect, describe } from "bun:test";
import { flattenOne } from "./index";

describe("flattenOne", () => {
  test("flattens arrays of numbers", () => {
    expect(flattenOne([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
  });

  test("flattens single-element arrays", () => {
    expect(flattenOne([[1], [2], [3]])).toEqual([1, 2, 3]);
  });

  test("flattens arrays of strings", () => {
    expect(flattenOne([["a", "b"], ["c"]])).toEqual(["a", "b", "c"]);
  });

  test("only flattens one level", () => {
    expect(flattenOne([[1, [2]], [3]])).toEqual([1, [2], 3]);
  });

  test("handles an empty array", () => {
    expect(flattenOne([])).toEqual([]);
  });
});
