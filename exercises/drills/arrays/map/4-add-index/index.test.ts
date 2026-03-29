import { test, expect, describe } from "bun:test";
import { addIndex } from ".";

describe("addIndex", () => {
  test("adds index to each value", () => {
    expect(addIndex([10, 20, 30])).toEqual([10, 21, 32]);
  });

  test("handles zeros", () => {
    expect(addIndex([0, 0, 0])).toEqual([0, 1, 2]);
  });

  test("handles negative numbers", () => {
    expect(addIndex([-5, -5, -5])).toEqual([-5, -4, -3]);
  });

  test("returns empty array for empty input", () => {
    expect(addIndex([])).toEqual([]);
  });

  test("handles single element", () => {
    expect(addIndex([100])).toEqual([100]);
  });
});
