import { test, expect, describe } from "bun:test";
import { formatPrice } from ".";

describe("formatPrice", () => {
  test("pads single digit cents", () => {
    expect(formatPrice(5, 5)).toBe("$5.05");
  });

  test("keeps two digit cents", () => {
    expect(formatPrice(12, 99)).toBe("$12.99");
  });

  test("handles zero cents", () => {
    expect(formatPrice(10, 0)).toBe("$10.00");
  });

  test("handles zero dollars", () => {
    expect(formatPrice(0, 50)).toBe("$0.50");
  });

  test("handles large dollar amount", () => {
    expect(formatPrice(1000, 1)).toBe("$1000.01");
  });
});
