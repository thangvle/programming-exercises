import { test, expect, describe } from "bun:test";
import { isValidEmail } from ".";

describe("isValidEmail", () => {
  test("returns true for valid email format", () => {
    expect(isValidEmail("a@b.com")).toBe(true);
  });

  test("returns false when @ is missing", () => {
    expect(isValidEmail("abc.com")).toBe(false);
  });

  test("returns false when . is missing", () => {
    expect(isValidEmail("a@bcom")).toBe(false);
  });

  test("returns true for complex email", () => {
    expect(isValidEmail("user.name@domain.co.uk")).toBe(true);
  });

  test("returns false for empty string", () => {
    expect(isValidEmail("")).toBe(false);
  });
});
