import { test, expect, describe } from "bun:test";
import { topN } from "./index";

describe("topN", () => {
  test("returns top 3 from five numbers", () => {
    expect(topN([5, 1, 3, 4, 2], 3)).toEqual([5, 4, 3]);
  });

  test("returns top 2 from three numbers", () => {
    expect(topN([10, 20, 30], 2)).toEqual([30, 20]);
  });

  test("returns all when n exceeds array length", () => {
    expect(topN([1, 2, 3], 5)).toEqual([3, 2, 1]);
  });

  test("returns single element", () => {
    expect(topN([7], 1)).toEqual([7]);
  });

  test("handles negative numbers", () => {
    expect(topN([-1, -5, -3], 2)).toEqual([-1, -3]);
  });
});
