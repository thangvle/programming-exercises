import { test, expect, describe } from "bun:test";
import { capitalizeFirst } from ".";

describe("capitalizeFirst", () => {
  test("capitalizes first letter and lowercases rest", () => {
    expect(capitalizeFirst("hELLO")).toBe("Hello");
  });

  test("handles already correct casing", () => {
    expect(capitalizeFirst("Hello")).toBe("Hello");
  });

  test("handles all lowercase", () => {
    expect(capitalizeFirst("world")).toBe("World");
  });

  test("handles single character", () => {
    expect(capitalizeFirst("a")).toBe("A");
  });

  test("handles empty string", () => {
    expect(capitalizeFirst("")).toBe("");
  });
});
