import { test, expect, describe } from "bun:test";
import { getFirstNChars } from "./index";

describe("getFirstNChars", () => {
  test("gets first 3 chars", () => {
    expect(getFirstNChars("hello", 3)).toBe("hel");
  });

  test("gets first 1 char", () => {
    expect(getFirstNChars("world", 1)).toBe("w");
  });

  test("gets first 5 chars of a 5-char string", () => {
    expect(getFirstNChars("abcde", 5)).toBe("abcde");
  });

  test("n is larger than string length", () => {
    expect(getFirstNChars("hi", 10)).toBe("hi");
  });

  test("n is 0 returns empty string", () => {
    expect(getFirstNChars("test", 0)).toBe("");
  });
});
