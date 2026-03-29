import { test, expect, describe } from "bun:test";
import { getLastNChars } from "./index";

describe("getLastNChars", () => {
  test("gets last 3 chars", () => {
    expect(getLastNChars("hello", 3)).toBe("llo");
  });

  test("gets last 1 char", () => {
    expect(getLastNChars("world", 1)).toBe("d");
  });

  test("gets last 5 chars of a 5-char string", () => {
    expect(getLastNChars("abcde", 5)).toBe("abcde");
  });

  test("n is larger than string length", () => {
    expect(getLastNChars("hi", 10)).toBe("hi");
  });

  test("n is 0 returns empty string", () => {
    expect(getLastNChars("test", 0)).toBe("");
  });
});
