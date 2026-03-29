import { test, expect, describe } from "bun:test";
import { wordsFromSentences } from "./index";

describe("wordsFromSentences", () => {
  test("extracts words from two sentences", () => {
    expect(wordsFromSentences(["hello world", "good morning"])).toEqual([
      "hello", "world", "good", "morning",
    ]);
  });

  test("extracts words from a single sentence", () => {
    expect(wordsFromSentences(["one two three"])).toEqual(["one", "two", "three"]);
  });

  test("handles a single word sentence", () => {
    expect(wordsFromSentences(["hi"])).toEqual(["hi"]);
  });

  test("extracts words from multiple sentences", () => {
    expect(wordsFromSentences(["a b", "c d e"])).toEqual(["a", "b", "c", "d", "e"]);
  });

  test("handles an empty array", () => {
    expect(wordsFromSentences([])).toEqual([]);
  });
});
