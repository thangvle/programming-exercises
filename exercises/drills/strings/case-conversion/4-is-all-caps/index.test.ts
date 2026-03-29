import { test, expect, describe } from "bun:test";
import { isAllCaps } from ".";

describe("isAllCaps", () => {
  test("returns true for all uppercase", () => {
    expect(isAllCaps("HELLO")).toBe(true);
  });

  test("returns false for mixed case", () => {
    expect(isAllCaps("Hello")).toBe(false);
  });

  test("returns false for all lowercase", () => {
    expect(isAllCaps("hello")).toBe(false);
  });

  test("returns true for uppercase with spaces", () => {
    expect(isAllCaps("HELLO WORLD")).toBe(true);
  });

  test("returns true for uppercase with numbers", () => {
    expect(isAllCaps("ABC123")).toBe(true);
  });
});
