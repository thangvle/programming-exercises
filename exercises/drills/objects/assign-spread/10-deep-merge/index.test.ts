import { test, expect, describe } from "bun:test";
import { deepMerge } from ".";

describe("deepMerge", () => {
  test("merges nested objects", () => {
    expect(deepMerge({ a: { b: 1, c: 2 } }, { a: { c: 3, d: 4 } })).toEqual({
      a: { b: 1, c: 3, d: 4 },
    });
  });

  test("merges flat objects", () => {
    expect(deepMerge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });

  test("source overrides primitive values", () => {
    expect(deepMerge({ a: 1 }, { a: 2 })).toEqual({ a: 2 });
  });

  test("deeply merges two levels", () => {
    expect(deepMerge({ a: { b: { c: 1 } } }, { a: { b: { d: 2 } } })).toEqual({
      a: { b: { c: 1, d: 2 } },
    });
  });

  test("handles empty source", () => {
    expect(deepMerge({ a: { b: 1 } }, {})).toEqual({ a: { b: 1 } });
  });
});
