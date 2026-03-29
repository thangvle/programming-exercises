import { test, expect, describe } from "bun:test";
import { normalizeWhitespace } from ".";

describe("normalizeWhitespace", () => {
  test("trims and collapses spaces", () => {
    expect(normalizeWhitespace("  hello   world  ")).toBe("hello world");
  });

  test("collapses multiple inner spaces", () => {
    expect(normalizeWhitespace("a  b  c")).toBe("a b c");
  });

  test("handles already normalized string", () => {
    expect(normalizeWhitespace("hello world")).toBe("hello world");
  });

  test("handles single word with spaces", () => {
    expect(normalizeWhitespace("  hello  ")).toBe("hello");
  });

  test("handles empty string", () => {
    expect(normalizeWhitespace("")).toBe("");
  });
});
