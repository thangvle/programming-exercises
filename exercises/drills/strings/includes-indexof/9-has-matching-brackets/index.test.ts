import { test, expect, describe } from "bun:test";
import { hasMatchingBrackets } from ".";

describe("hasMatchingBrackets", () => {
  test("returns true when both brackets are present", () => {
    expect(hasMatchingBrackets("(hello)")).toBe(true);
  });

  test("returns false when only closing bracket is present", () => {
    expect(hasMatchingBrackets("hello)")).toBe(false);
  });

  test("returns false when only opening bracket is present", () => {
    expect(hasMatchingBrackets("(hello")).toBe(false);
  });

  test("returns false when no brackets are present", () => {
    expect(hasMatchingBrackets("hello")).toBe(false);
  });

  test("returns true with multiple bracket pairs", () => {
    expect(hasMatchingBrackets("(a)(b)")).toBe(true);
  });
});
