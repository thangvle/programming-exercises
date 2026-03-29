import { test, expect, describe } from "bun:test";
import { safeParseInt } from ".";

describe("safeParseInt", () => {
  test("parses valid integer string", () => {
    expect(safeParseInt("42")).toBe(42);
  });

  test("returns 0 for non-numeric string", () => {
    expect(safeParseInt("abc")).toBe(0);
  });

  test("returns 0 for empty string", () => {
    expect(safeParseInt("")).toBe(0);
  });

  test("parses negative number", () => {
    expect(safeParseInt("-10")).toBe(-10);
  });

  test("returns 0 for undefined-like string", () => {
    expect(safeParseInt("hello world")).toBe(0);
  });
});
