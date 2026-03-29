import { test, expect, describe } from "bun:test";
import { sortAscending } from "./index";

describe("sortAscending", () => {
  test("sorts three numbers", () => {
    expect(sortAscending([3, 1, 2])).toEqual([1, 2, 3]);
  });

  test("sorts four numbers", () => {
    expect(sortAscending([5, 3, 8, 1])).toEqual([1, 3, 5, 8]);
  });

  test("handles a single element", () => {
    expect(sortAscending([1])).toEqual([1]);
  });

  test("handles duplicates", () => {
    expect(sortAscending([2, 2, 1])).toEqual([1, 2, 2]);
  });

  test("handles negative numbers", () => {
    expect(sortAscending([3, -1, 0, 2])).toEqual([-1, 0, 2, 3]);
  });
});
