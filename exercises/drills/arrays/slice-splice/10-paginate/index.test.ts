import { test, expect, describe } from "bun:test";
import { paginate } from "./index";

describe("paginate", () => {
  test("returns page 2 with size 3", () => {
    expect(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 3)).toEqual([4, 5, 6]);
  });

  test("returns page 1 with size 2", () => {
    expect(paginate([1, 2, 3, 4, 5], 1, 2)).toEqual([1, 2]);
  });

  test("returns partial last page", () => {
    expect(paginate([1, 2, 3, 4, 5], 3, 2)).toEqual([5]);
  });

  test("returns empty when page exceeds data", () => {
    expect(paginate([1, 2, 3], 2, 5)).toEqual([]);
  });

  test("returns all items when page size covers everything", () => {
    expect(paginate([1, 2, 3], 1, 10)).toEqual([1, 2, 3]);
  });
});
