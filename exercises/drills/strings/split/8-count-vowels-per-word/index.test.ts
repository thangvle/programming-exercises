import { test, expect, describe } from "bun:test";
import { countVowelsPerWord } from "./index";

describe("countVowelsPerWord", () => {
  test("counts vowels in two words", () => {
    expect(countVowelsPerWord("hello world")).toEqual([2, 1]);
  });

  test("counts vowels in single word", () => {
    expect(countVowelsPerWord("apple")).toEqual([2]);
  });

  test("no vowels", () => {
    expect(countVowelsPerWord("gym cry")).toEqual([0, 0]);
  });

  test("all vowels", () => {
    expect(countVowelsPerWord("aeiou")).toEqual([5]);
  });

  test("mixed case", () => {
    expect(countVowelsPerWord("Hello World")).toEqual([2, 1]);
  });
});
