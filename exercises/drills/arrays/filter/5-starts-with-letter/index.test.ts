import { test, expect, describe } from "bun:test";
import { startsWithLetter } from ".";

describe("startsWithLetter", () => {
  test("filters strings starting with 'a'", () => {
    expect(startsWithLetter(["apple", "banana", "avocado"], "a")).toEqual([
      "apple",
      "avocado",
    ]);
  });

  test("is case-insensitive", () => {
    expect(startsWithLetter(["Cat", "car", "dog"], "c")).toEqual([
      "Cat",
      "car",
    ]);
  });

  test("returns empty when no match", () => {
    expect(startsWithLetter(["hello", "world"], "z")).toEqual([]);
  });

  test("handles empty array", () => {
    expect(startsWithLetter([], "a")).toEqual([]);
  });

  test("matches uppercase letter parameter", () => {
    expect(startsWithLetter(["apple", "Avocado"], "A")).toEqual([
      "apple",
      "Avocado",
    ]);
  });
});
