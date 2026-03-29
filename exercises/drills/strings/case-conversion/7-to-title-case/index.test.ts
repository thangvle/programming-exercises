import { test, expect, describe } from "bun:test";
import { toTitleCase } from ".";

describe("toTitleCase", () => {
  test("capitalizes first letter of each word", () => {
    expect(toTitleCase("hello world")).toBe("Hello World");
  });

  test("handles three words", () => {
    expect(toTitleCase("foo bar baz")).toBe("Foo Bar Baz");
  });

  test("handles mixed case input", () => {
    expect(toTitleCase("hELLO wORLD")).toBe("Hello World");
  });

  test("handles single word", () => {
    expect(toTitleCase("hello")).toBe("Hello");
  });

  test("handles empty string", () => {
    expect(toTitleCase("")).toBe("");
  });
});
