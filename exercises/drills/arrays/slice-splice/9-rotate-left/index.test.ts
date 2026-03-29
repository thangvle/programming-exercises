import { test, expect, describe } from "bun:test";
import { rotateLeft } from "./index";

describe("rotateLeft", () => {
  test("rotates left by 2", () => {
    expect(rotateLeft([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5, 1, 2]);
  });

  test("rotates left by 1", () => {
    expect(rotateLeft([1, 2, 3], 1)).toEqual([2, 3, 1]);
  });

  test("rotates by the full length (no change)", () => {
    expect(rotateLeft([1, 2, 3], 3)).toEqual([1, 2, 3]);
  });

  test("works with strings", () => {
    expect(rotateLeft(["a", "b", "c"], 1)).toEqual(["b", "c", "a"]);
  });

  test("handles an empty array", () => {
    expect(rotateLeft([], 2)).toEqual([]);
  });
});
