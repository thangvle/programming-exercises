import { test, expect, describe } from "bun:test";
import { expandRanges } from "./index";

describe("expandRanges", () => {
  test("expands two ranges", () => {
    expect(expandRanges([[1, 3], [5, 7]])).toEqual([1, 2, 3, 5, 6, 7]);
  });

  test("expands a single range", () => {
    expect(expandRanges([[0, 2]])).toEqual([0, 1, 2]);
  });

  test("handles a range of one element", () => {
    expect(expandRanges([[5, 5]])).toEqual([5]);
  });

  test("expands two non-consecutive ranges", () => {
    expect(expandRanges([[1, 4], [8, 9]])).toEqual([1, 2, 3, 4, 8, 9]);
  });

  test("handles an empty array", () => {
    expect(expandRanges([])).toEqual([]);
  });
});
