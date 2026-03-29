import { test, expect, describe } from "bun:test";
import { chunk } from "./index";

describe("chunk", () => {
  test("chunks with remainder", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  test("chunks evenly", () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });

  test("chunks of size 1", () => {
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  test("chunk size larger than array", () => {
    expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });

  test("handles an empty array", () => {
    expect(chunk([], 3)).toEqual([]);
  });
});
