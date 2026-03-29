import { test, expect, describe } from "bun:test";
import { surround } from ".";

describe("surround", () => {
  test("surrounds with 3 asterisks", () => {
    expect(surround("hello", "*", 3)).toBe("***hello***");
  });

  test("surrounds with 2 dashes", () => {
    expect(surround("hi", "-", 2)).toBe("--hi--");
  });

  test("surrounds with 1 character", () => {
    expect(surround("x", "|", 1)).toBe("|x|");
  });

  test("surrounds with 0 repeats", () => {
    expect(surround("hello", "*", 0)).toBe("hello");
  });

  test("surrounds empty string", () => {
    expect(surround("", "#", 3)).toBe("######");
  });
});
