import { test, expect, describe } from "bun:test";
import { findCommonChar } from ".";

describe("findCommonChar", () => {
  test("finds common character at end of first string", () => {
    expect(findCommonChar("abc", "cde")).toBe("c");
  });

  test("returns empty string when no common character", () => {
    expect(findCommonChar("abc", "xyz")).toBe("");
  });

  test("finds common character at start of first string", () => {
    expect(findCommonChar("abc", "axy")).toBe("a");
  });

  test("returns first common char from str1's perspective", () => {
    expect(findCommonChar("hello", "ole")).toBe("e");
  });

  test("returns empty string for empty input", () => {
    expect(findCommonChar("", "abc")).toBe("");
  });
});
