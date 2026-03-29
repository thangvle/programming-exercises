import { test, expect, describe } from "bun:test";
import { isSameIgnoreCase } from ".";

describe("isSameIgnoreCase", () => {
  test("returns true for same word different case", () => {
    expect(isSameIgnoreCase("Hello", "hello")).toBe(true);
  });

  test("returns false for different words", () => {
    expect(isSameIgnoreCase("Hello", "world")).toBe(false);
  });

  test("returns true for all caps vs lowercase", () => {
    expect(isSameIgnoreCase("HELLO", "hello")).toBe(true);
  });

  test("returns true for identical strings", () => {
    expect(isSameIgnoreCase("test", "test")).toBe(true);
  });

  test("returns false for strings of different length", () => {
    expect(isSameIgnoreCase("hello", "helloo")).toBe(false);
  });
});
