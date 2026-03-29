import { test, expect, describe } from "bun:test";
import { startsWithVowel } from ".";

describe("startsWithVowel", () => {
  test("returns true for lowercase vowel", () => {
    expect(startsWithVowel("apple")).toBe(true);
  });

  test("returns true for uppercase vowel", () => {
    expect(startsWithVowel("Eagle")).toBe(true);
  });

  test("returns false for consonant", () => {
    expect(startsWithVowel("banana")).toBe(false);
  });

  test("returns true for 'u'", () => {
    expect(startsWithVowel("umbrella")).toBe(true);
  });

  test("returns false for an empty string", () => {
    expect(startsWithVowel("")).toBe(false);
  });
});
