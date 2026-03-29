import { test, expect, describe } from "bun:test";
import { swapChar } from ".";

describe("swapChar", () => {
  test("replaces all occurrences of a character", () => {
    expect(swapChar("hello", "l", "r")).toBe("herro");
  });

  test("replaces character in repeated pattern", () => {
    expect(swapChar("banana", "a", "o")).toBe("bonono");
  });

  test("returns same string when character not found", () => {
    expect(swapChar("hello", "z", "a")).toBe("hello");
  });

  test("replaces single occurrence", () => {
    expect(swapChar("hello", "h", "j")).toBe("jello");
  });

  test("handles empty string", () => {
    expect(swapChar("", "a", "b")).toBe("");
  });
});
