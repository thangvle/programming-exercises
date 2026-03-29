import { test, expect, describe } from "bun:test";
import { isNumeric } from ".";

describe("isNumeric", () => {
  test("returns true for float string", () => {
    expect(isNumeric("3.14")).toBe(true);
  });

  test("returns false for alphabetic string", () => {
    expect(isNumeric("abc")).toBe(false);
  });

  test("returns true for integer string", () => {
    expect(isNumeric("42")).toBe(true);
  });

  test("returns true for negative number string", () => {
    expect(isNumeric("-7")).toBe(true);
  });

  test("returns false for empty string", () => {
    expect(isNumeric("")).toBe(false);
  });
});
