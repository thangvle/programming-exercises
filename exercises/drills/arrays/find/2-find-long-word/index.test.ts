import { test, expect, describe } from "bun:test";
import { findLongWord } from ".";

describe("findLongWord", () => {
  test("finds first word longer than 3", () => {
    expect(findLongWord(["hi", "hello", "hey"], 3)).toEqual("hello");
  });

  test("returns undefined when no word qualifies", () => {
    expect(findLongWord(["a", "b"], 5)).toBeUndefined();
  });

  test("finds first qualifying word", () => {
    expect(findLongWord(["hello", "world"], 3)).toEqual("hello");
  });

  test("handles empty array", () => {
    expect(findLongWord([], 1)).toBeUndefined();
  });

  test("finds word longer than 0", () => {
    expect(findLongWord(["", "a", "bb"], 0)).toEqual("a");
  });
});
