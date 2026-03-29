import { test, expect, describe } from "bun:test";
import { sortDescending } from "./index";

describe("sortDescending", () => {
  test("sorts three numbers descending", () => {
    expect(sortDescending([3, 1, 2])).toEqual([3, 2, 1]);
  });

  test("sorts four numbers descending", () => {
    expect(sortDescending([5, 3, 8, 1])).toEqual([8, 5, 3, 1]);
  });

  test("handles a single element", () => {
    expect(sortDescending([1])).toEqual([1]);
  });

  test("handles duplicates", () => {
    expect(sortDescending([2, 2, 1])).toEqual([2, 2, 1]);
  });

  test("handles negative numbers", () => {
    expect(sortDescending([3, -1, 0, 2])).toEqual([3, 2, 0, -1]);
  });
});
