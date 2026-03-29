import { test, expect, describe } from "bun:test";
import { isBlank } from ".";

describe("isBlank", () => {
  test("returns true for spaces only", () => {
    expect(isBlank("   ")).toBe(true);
  });

  test("returns false for non-empty string", () => {
    expect(isBlank("hello")).toBe(false);
  });

  test("returns true for empty string", () => {
    expect(isBlank("")).toBe(true);
  });

  test("returns true for tabs and newlines", () => {
    expect(isBlank("\t\n")).toBe(true);
  });

  test("returns false for string with spaces and content", () => {
    expect(isBlank("  hi  ")).toBe(false);
  });
});
