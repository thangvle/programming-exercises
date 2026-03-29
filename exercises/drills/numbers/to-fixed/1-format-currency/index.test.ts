import { test, expect, describe } from "bun:test";
import { formatCurrency } from ".";

describe("formatCurrency", () => {
  test("formats with one decimal to two", () => {
    expect(formatCurrency(5.1)).toBe("$5.10");
  });

  test("formats whole number", () => {
    expect(formatCurrency(100)).toBe("$100.00");
  });

  test("formats zero", () => {
    expect(formatCurrency(0)).toBe("$0.00");
  });

  test("rounds to two decimals", () => {
    expect(formatCurrency(9.999)).toBe("$10.00");
  });

  test("formats already two-decimal number", () => {
    expect(formatCurrency(19.99)).toBe("$19.99");
  });
});
