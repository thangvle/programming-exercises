import { test, expect, describe } from "bun:test";
import { formatScore } from ".";

describe("formatScore", () => {
  test("rounds to 1 decimal", () => {
    expect(formatScore(9.5678)).toBe("9.6");
  });

  test("formats whole number with decimal", () => {
    expect(formatScore(10)).toBe("10.0");
  });

  test("formats zero", () => {
    expect(formatScore(0)).toBe("0.0");
  });

  test("rounds down when appropriate", () => {
    expect(formatScore(8.34)).toBe("8.3");
  });

  test("formats already 1-decimal number", () => {
    expect(formatScore(7.5)).toBe("7.5");
  });
});
