import { test, expect, describe } from "bun:test";
import { removeVowels } from ".";

describe("removeVowels", () => {
  test("removes vowels from simple word", () => {
    expect(removeVowels("hello")).toBe("hll");
  });

  test("removes all vowels including repeated ones", () => {
    expect(removeVowels("banana")).toBe("bnn");
  });

  test("returns empty string when all vowels", () => {
    expect(removeVowels("aeiou")).toBe("");
  });

  test("returns same string when no vowels", () => {
    expect(removeVowels("rhythm")).toBe("rhythm");
  });

  test("handles uppercase vowels", () => {
    expect(removeVowels("HELLO")).toBe("HLL");
  });
});
