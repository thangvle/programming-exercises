import { test, expect, describe } from "bun:test";
import { conditionalMerge } from ".";

describe("conditionalMerge", () => {
  test("merges when condition is true", () => {
    expect(conditionalMerge({ a: 1 }, { b: 2 }, true)).toEqual({ a: 1, b: 2 });
  });

  test("does not merge when condition is false", () => {
    expect(conditionalMerge({ a: 1 }, { b: 2 }, false)).toEqual({ a: 1 });
  });

  test("returns base when extra is empty and condition true", () => {
    expect(conditionalMerge({ a: 1 }, {}, true)).toEqual({ a: 1 });
  });

  test("extra overrides base when condition is true", () => {
    expect(conditionalMerge({ a: 1 }, { a: 99 }, true)).toEqual({ a: 99 });
  });

  test("base unchanged when condition false even with overlapping keys", () => {
    expect(conditionalMerge({ a: 1 }, { a: 99 }, false)).toEqual({ a: 1 });
  });
});
