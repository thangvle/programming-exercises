import { test, expect, describe } from "bun:test";
import { containsAny } from ".";

describe("containsAny", () => {
  test("returns true when one substring matches", () => {
    expect(containsAny("hello world", ["xyz", "world"])).toBe(true);
  });

  test("returns false when no substrings match", () => {
    expect(containsAny("hello world", ["xyz", "abc"])).toBe(false);
  });

  test("returns true when first substring matches", () => {
    expect(containsAny("hello world", ["hello", "abc"])).toBe(true);
  });

  test("returns false for empty substrings array", () => {
    expect(containsAny("hello world", [])).toBe(false);
  });

  test("returns true when multiple substrings match", () => {
    expect(containsAny("hello world", ["hello", "world"])).toBe(true);
  });
});
