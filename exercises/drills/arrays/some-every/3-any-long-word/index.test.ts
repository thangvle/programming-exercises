import { test, expect, describe } from "bun:test";
import { anyLongWord } from "./index";

describe("anyLongWord", () => {
  test("returns true when a word exceeds the length", () => {
    expect(anyLongWord(["hi", "hello"], 4)).toBe(true);
  });

  test("returns false when no word exceeds the length", () => {
    expect(anyLongWord(["hi", "hey"], 4)).toBe(false);
  });

  test("returns false when words are exactly n characters", () => {
    expect(anyLongWord(["short", "tiny"], 5)).toBe(false);
  });

  test("returns true for a single long word", () => {
    expect(anyLongWord(["extraordinary"], 5)).toBe(true);
  });

  test("returns false for an empty array", () => {
    expect(anyLongWord([], 3)).toBe(false);
  });
});
