import { test, expect, describe } from "bun:test";
import { cleanInput } from ".";

describe("cleanInput", () => {
  test("trims spaces from both ends", () => {
    expect(cleanInput("  hello  ")).toBe("hello");
  });

  test("trims tabs and newlines", () => {
    expect(cleanInput("\thello\n")).toBe("hello");
  });

  test("returns same string when no whitespace", () => {
    expect(cleanInput("hello")).toBe("hello");
  });

  test("preserves inner whitespace", () => {
    expect(cleanInput("  hello world  ")).toBe("hello world");
  });

  test("returns empty string for whitespace-only input", () => {
    expect(cleanInput("   ")).toBe("");
  });
});
