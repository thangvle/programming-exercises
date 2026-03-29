import { test, expect, describe } from "bun:test";
import { containsDigit } from ".";

describe("containsDigit", () => {
  test("returns true when digit is in the middle", () => {
    expect(containsDigit("abc3def")).toBe(true);
  });

  test("returns false when no digits present", () => {
    expect(containsDigit("abcdef")).toBe(false);
  });

  test("returns true when string starts with digit", () => {
    expect(containsDigit("1abc")).toBe(true);
  });

  test("returns true when string ends with digit", () => {
    expect(containsDigit("abc9")).toBe(true);
  });

  test("returns false for empty string", () => {
    expect(containsDigit("")).toBe(false);
  });
});
