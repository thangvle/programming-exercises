import { test, expect, describe } from "bun:test";
import { containsWord } from ".";

describe("containsWord", () => {
  test("returns true when word is present", () => {
    expect(containsWord("hello world", "world")).toBe(true);
  });

  test("returns false when word is absent", () => {
    expect(containsWord("hello world", "planet")).toBe(false);
  });

  test("returns true when word is at the beginning", () => {
    expect(containsWord("hello world", "hello")).toBe(true);
  });

  test("returns false for partial match within another word", () => {
    expect(containsWord("sunflower", "flower")).toBe(true);
  });

  test("returns false for empty word in non-empty sentence", () => {
    expect(containsWord("hello", "")).toBe(true);
  });
});
