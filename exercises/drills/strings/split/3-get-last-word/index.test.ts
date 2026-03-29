import { test, expect, describe } from "bun:test";
import { getLastWord } from "./index";

describe("getLastWord", () => {
  test("gets last word from two words", () => {
    expect(getLastWord("hello world")).toBe("world");
  });

  test("gets last word from many words", () => {
    expect(getLastWord("the quick brown fox")).toBe("fox");
  });

  test("single word returns itself", () => {
    expect(getLastWord("hello")).toBe("hello");
  });

  test("gets last word with numbers", () => {
    expect(getLastWord("the answer is 42")).toBe("42");
  });

  test("gets last word from a sentence", () => {
    expect(getLastWord("coding is fun")).toBe("fun");
  });
});
