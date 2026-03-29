import { test, expect, describe } from "bun:test";
import { average } from ".";

describe("average", () => {
  test("computes average of whole numbers", () => {
    expect(average([10, 20, 30])).toEqual(20);
  });

  test("computes average resulting in decimal", () => {
    expect(average([1, 2, 3, 4])).toEqual(2.5);
  });

  test("handles single element", () => {
    expect(average([5])).toEqual(5);
  });

  test("handles negative numbers", () => {
    expect(average([-10, 10])).toEqual(0);
  });

  test("computes average of identical values", () => {
    expect(average([7, 7, 7])).toEqual(7);
  });
});
