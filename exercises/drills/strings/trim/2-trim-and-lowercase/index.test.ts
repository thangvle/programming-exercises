import { test, expect, describe } from "bun:test";
import { trimAndLowercase } from ".";

describe("trimAndLowercase", () => {
  test("trims and lowercases uppercase string", () => {
    expect(trimAndLowercase("  HELLO  ")).toBe("hello");
  });

  test("trims and lowercases mixed case", () => {
    expect(trimAndLowercase("  World  ")).toBe("world");
  });

  test("handles already lowercase and trimmed", () => {
    expect(trimAndLowercase("hello")).toBe("hello");
  });

  test("handles only whitespace", () => {
    expect(trimAndLowercase("   ")).toBe("");
  });

  test("handles tabs and mixed whitespace", () => {
    expect(trimAndLowercase("\t HELLO \n")).toBe("hello");
  });
});
