import { test, expect, describe } from "bun:test";
import { getFirstWord } from "./index";

describe("getFirstWord", () => {
  test("gets first word from two words", () => {
    expect(getFirstWord("hello world")).toBe("hello");
  });

  test("gets first word from many words", () => {
    expect(getFirstWord("the quick brown fox")).toBe("the");
  });

  test("single word returns itself", () => {
    expect(getFirstWord("hello")).toBe("hello");
  });

  test("gets first word with numbers", () => {
    expect(getFirstWord("42 is the answer")).toBe("42");
  });

  test("gets first word from a sentence", () => {
    expect(getFirstWord("coding is fun")).toBe("coding");
  });
});
