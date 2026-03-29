import { test, expect, describe } from "bun:test";
import { positionOf } from ".";

describe("positionOf", () => {
  test("finds position of string", () => {
    expect(positionOf(["a", "b", "c"], "b")).toEqual(1);
  });

  test("finds position of number", () => {
    expect(positionOf([10, 20, 30], 30)).toEqual(2);
  });

  test("returns -1 when not found", () => {
    expect(positionOf([1, 2, 3], 5)).toEqual(-1);
  });

  test("finds element at index 0", () => {
    expect(positionOf(["x", "y"], "x")).toEqual(0);
  });

  test("handles empty array", () => {
    expect(positionOf([], "a")).toEqual(-1);
  });
});
