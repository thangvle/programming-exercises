import { test, expect, describe } from "bun:test";
import { toCamelCase } from ".";

describe("toCamelCase", () => {
  test("converts simple hyphenated string", () => {
    expect(toCamelCase("hello-world")).toBe("helloWorld");
  });

  test("converts CSS-style property", () => {
    expect(toCamelCase("background-color")).toBe("backgroundColor");
  });

  test("converts multiple hyphens", () => {
    expect(toCamelCase("border-top-width")).toBe("borderTopWidth");
  });

  test("returns same string when no hyphens", () => {
    expect(toCamelCase("hello")).toBe("hello");
  });

  test("handles single character segments", () => {
    expect(toCamelCase("a-b-c")).toBe("aBC");
  });
});
