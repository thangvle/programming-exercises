import { test, expect, describe } from "bun:test";
import { formatGpa } from ".";

describe("formatGpa", () => {
  test("formats 3.8 to 3.80", () => {
    expect(formatGpa(3.8)).toBe("3.80");
  });

  test("formats whole number", () => {
    expect(formatGpa(4)).toBe("4.00");
  });

  test("formats zero", () => {
    expect(formatGpa(0)).toBe("0.00");
  });

  test("formats already 2-decimal number", () => {
    expect(formatGpa(3.75)).toBe("3.75");
  });

  test("rounds to 2 decimals", () => {
    expect(formatGpa(3.456)).toBe("3.46");
  });
});
