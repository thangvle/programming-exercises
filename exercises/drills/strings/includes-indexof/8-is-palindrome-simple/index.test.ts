import { test, expect, describe } from "bun:test";
import { isPalindrome } from ".";

describe("isPalindrome", () => {
  test("returns true for a palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test("returns false for a non-palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  test("returns true for single character", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  test("returns true for empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  test("returns true for two-char palindrome", () => {
    expect(isPalindrome("aa")).toBe(true);
  });
});
