import { test, expect, describe } from "bun:test";
import { longWords } from ".";

describe("longWords", () => {
  test("filters words longer than 2", () => {
    expect(longWords(["hi", "hello", "hey"], 2)).toEqual(["hello", "hey"]);
  });

  test("filters words longer than 1", () => {
    expect(longWords(["a", "bb", "ccc"], 1)).toEqual(["bb", "ccc"]);
  });

  test("returns empty when no words qualify", () => {
    expect(longWords(["a", "b"], 5)).toEqual([]);
  });

  test("returns all words when threshold is 0", () => {
    expect(longWords(["hi", "hey"], 0)).toEqual(["hi", "hey"]);
  });

  test("handles empty array", () => {
    expect(longWords([], 3)).toEqual([]);
  });
});
