import { test, expect, describe } from "bun:test";
import { mergeMany } from ".";

describe("mergeMany", () => {
  test("merges three objects", () => {
    expect(mergeMany([{ a: 1 }, { b: 2 }, { c: 3 }])).toEqual({ a: 1, b: 2, c: 3 });
  });

  test("returns empty object for empty array", () => {
    expect(mergeMany([])).toEqual({});
  });

  test("merges single object", () => {
    expect(mergeMany([{ a: 1, b: 2 }])).toEqual({ a: 1, b: 2 });
  });

  test("later objects override earlier ones", () => {
    expect(mergeMany([{ a: 1 }, { a: 2 }, { a: 3 }])).toEqual({ a: 3 });
  });

  test("merges two objects", () => {
    expect(mergeMany([{ x: 10 }, { y: 20 }])).toEqual({ x: 10, y: 20 });
  });
});
