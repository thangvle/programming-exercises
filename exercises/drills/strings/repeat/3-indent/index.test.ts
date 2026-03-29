import { test, expect, describe } from "bun:test";
import { indent } from ".";

describe("indent", () => {
  test("indents with 4 spaces", () => {
    expect(indent("hello", 4)).toBe("    hello");
  });

  test("indents with 2 spaces", () => {
    expect(indent("world", 2)).toBe("  world");
  });

  test("indents with 0 spaces", () => {
    expect(indent("hello", 0)).toBe("hello");
  });

  test("indents with 1 space", () => {
    expect(indent("test", 1)).toBe(" test");
  });

  test("indents empty string", () => {
    expect(indent("", 4)).toBe("    ");
  });
});
