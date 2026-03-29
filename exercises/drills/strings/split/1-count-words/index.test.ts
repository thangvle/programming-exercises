import { test, expect, describe } from "bun:test";
import { countWords } from "./index";

describe("countWords", () => {
  test("counts words in a sentence", () => {
    expect(countWords("hello world")).toBe(2);
  });

  test("counts single word", () => {
    expect(countWords("hello")).toBe(1);
  });

  test("counts multiple words", () => {
    expect(countWords("the quick brown fox")).toBe(4);
  });

  test("counts words in a longer sentence", () => {
    expect(countWords("I love to write code every day")).toBe(7);
  });

  test("single character word", () => {
    expect(countWords("a b c")).toBe(3);
  });
});
