import { test, expect, describe } from "bun:test";
import { redactNumbers } from ".";

describe("redactNumbers", () => {
  test("redacts digits in a phone number", () => {
    expect(redactNumbers("call 555-1234")).toBe("call ###-####");
  });

  test("redacts digits in a simple number", () => {
    expect(redactNumbers("age: 25")).toBe("age: ##");
  });

  test("returns same string when no digits", () => {
    expect(redactNumbers("hello world")).toBe("hello world");
  });

  test("redacts all digits in mixed content", () => {
    expect(redactNumbers("room 42, floor 3")).toBe("room ##, floor #");
  });

  test("handles string of only digits", () => {
    expect(redactNumbers("12345")).toBe("#####");
  });
});
