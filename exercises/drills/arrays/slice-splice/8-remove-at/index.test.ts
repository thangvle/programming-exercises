import { test, expect, describe } from "bun:test";
import { removeAt } from "./index";

describe("removeAt", () => {
  test("removes from the middle", () => {
    expect(removeAt([1, 2, 3, 4], 1)).toEqual([1, 3, 4]);
  });

  test("removes the first element", () => {
    expect(removeAt(["a", "b", "c"], 0)).toEqual(["b", "c"]);
  });

  test("removes the last element", () => {
    expect(removeAt([1, 2, 3], 2)).toEqual([1, 2]);
  });

  test("removes from three numbers", () => {
    expect(removeAt([10, 20, 30], 1)).toEqual([10, 30]);
  });

  test("removes from a single-element array", () => {
    expect(removeAt([42], 0)).toEqual([]);
  });
});
