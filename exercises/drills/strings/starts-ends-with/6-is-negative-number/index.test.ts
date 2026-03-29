import { test, expect, describe } from "bun:test";
import { isNegativeNumber } from ".";

describe("isNegativeNumber", () => {
  test("returns true for negative number", () => {
    expect(isNegativeNumber("-42")).toBe(true);
  });

  test("returns false for positive number", () => {
    expect(isNegativeNumber("42")).toBe(false);
  });

  test("returns true for negative decimal", () => {
    expect(isNegativeNumber("-3.14")).toBe(true);
  });

  test("returns false for zero", () => {
    expect(isNegativeNumber("0")).toBe(false);
  });

  test("returns true for negative zero", () => {
    expect(isNegativeNumber("-0")).toBe(true);
  });
});
