import { test, expect, describe } from "bun:test";
import { centerText } from ".";

describe("centerText", () => {
  test("centers even-length string in even width", () => {
    expect(centerText("hi", 10)).toBe("    hi    ");
  });

  test("centers odd-length string with extra space on right", () => {
    expect(centerText("hey", 10)).toBe("   hey    ");
  });

  test("returns string as-is when equal to width", () => {
    expect(centerText("hello", 5)).toBe("hello");
  });

  test("returns string as-is when longer than width", () => {
    expect(centerText("hello world", 5)).toBe("hello world");
  });

  test("centers single character", () => {
    expect(centerText("x", 5)).toBe("  x  ");
  });
});
