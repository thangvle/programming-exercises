import { test, expect, describe } from "bun:test";
import { toggleCase } from ".";

describe("toggleCase", () => {
  test("swaps case of mixed string", () => {
    expect(toggleCase("Hello")).toBe("hELLO");
  });

  test("converts all uppercase to lowercase", () => {
    expect(toggleCase("HELLO")).toBe("hello");
  });

  test("converts all lowercase to uppercase", () => {
    expect(toggleCase("hello")).toBe("HELLO");
  });

  test("handles string with spaces", () => {
    expect(toggleCase("Hello World")).toBe("hELLO wORLD");
  });

  test("handles empty string", () => {
    expect(toggleCase("")).toBe("");
  });
});
