import { test, expect, describe } from "bun:test";
import { reverseWords } from "./index";

describe("reverseWords", () => {
  test("reverses two words", () => {
    expect(reverseWords("hello world")).toBe("world hello");
  });

  test("reverses three words", () => {
    expect(reverseWords("one two three")).toBe("three two one");
  });

  test("single word stays the same", () => {
    expect(reverseWords("hello")).toBe("hello");
  });

  test("reverses four words", () => {
    expect(reverseWords("I love to code")).toBe("code to love I");
  });

  test("reverses five words", () => {
    expect(reverseWords("the quick brown fox jumps")).toBe("jumps fox brown quick the");
  });
});
