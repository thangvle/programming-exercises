import { test, expect, describe } from "bun:test";
import { rightAlign } from ".";

describe("rightAlign", () => {
  test("pads short string with spaces", () => {
    expect(rightAlign("hi", 10)).toBe("        hi");
  });

  test("pads longer string with fewer spaces", () => {
    expect(rightAlign("hello", 10)).toBe("     hello");
  });

  test("returns string as-is when equal to width", () => {
    expect(rightAlign("hello", 5)).toBe("hello");
  });

  test("returns string as-is when longer than width", () => {
    expect(rightAlign("hello world", 5)).toBe("hello world");
  });

  test("pads single character", () => {
    expect(rightAlign("x", 5)).toBe("    x");
  });
});
