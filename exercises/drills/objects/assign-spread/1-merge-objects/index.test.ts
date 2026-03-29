import { test, expect, describe } from "bun:test";
import { mergeObjects } from ".";

describe("mergeObjects", () => {
  test("merges two objects with different keys", () => {
    expect(mergeObjects({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });

  test("second object overrides first for shared keys", () => {
    expect(mergeObjects({ a: 1 }, { a: 2 })).toEqual({ a: 2 });
  });

  test("merges with empty first object", () => {
    expect(mergeObjects({}, { a: 1 })).toEqual({ a: 1 });
  });

  test("merges with empty second object", () => {
    expect(mergeObjects({ a: 1 }, {})).toEqual({ a: 1 });
  });

  test("merges objects with multiple keys", () => {
    expect(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });
});
