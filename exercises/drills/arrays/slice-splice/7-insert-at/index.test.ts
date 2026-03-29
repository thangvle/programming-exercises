import { test, expect, describe } from "bun:test";
import { insertAt } from "./index";

describe("insertAt", () => {
  test("inserts in the middle", () => {
    expect(insertAt([1, 2, 4, 5], 2, 3)).toEqual([1, 2, 3, 4, 5]);
  });

  test("inserts a string in the middle", () => {
    expect(insertAt(["a", "c"], 1, "b")).toEqual(["a", "b", "c"]);
  });

  test("inserts at the beginning", () => {
    expect(insertAt([1, 2], 0, 0)).toEqual([0, 1, 2]);
  });

  test("inserts at the end", () => {
    expect(insertAt([1, 2], 2, 3)).toEqual([1, 2, 3]);
  });

  test("inserts into an empty array", () => {
    expect(insertAt([], 0, 1)).toEqual([1]);
  });
});
