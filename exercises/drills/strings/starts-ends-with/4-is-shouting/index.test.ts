import { test, expect, describe } from "bun:test";
import { isShouting } from ".";

describe("isShouting", () => {
  test("returns true for string ending with '!'", () => {
    expect(isShouting("Hello!")).toBe(true);
  });

  test("returns false for string without '!'", () => {
    expect(isShouting("Hello")).toBe(false);
  });

  test("returns false for '!' in the middle", () => {
    expect(isShouting("Hey! there")).toBe(false);
  });

  test("returns true for multiple exclamation marks", () => {
    expect(isShouting("Wow!!!")).toBe(true);
  });

  test("returns false for an empty string", () => {
    expect(isShouting("")).toBe(false);
  });
});
