import { test, expect, describe } from "bun:test";
import { leftAlign } from ".";

describe("leftAlign", () => {
  test("pads short string with trailing spaces", () => {
    expect(leftAlign("hi", 10)).toBe("hi        ");
  });

  test("pads longer string with fewer trailing spaces", () => {
    expect(leftAlign("hello", 10)).toBe("hello     ");
  });

  test("returns string as-is when equal to width", () => {
    expect(leftAlign("hello", 5)).toBe("hello");
  });

  test("returns string as-is when longer than width", () => {
    expect(leftAlign("hello world", 5)).toBe("hello world");
  });

  test("pads single character", () => {
    expect(leftAlign("x", 5)).toBe("x    ");
  });
});
