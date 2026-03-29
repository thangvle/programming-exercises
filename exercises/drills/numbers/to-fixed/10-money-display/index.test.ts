import { test, expect, describe } from "bun:test";
import { moneyDisplay } from ".";

describe("moneyDisplay", () => {
  test("formats millions with commas", () => {
    expect(moneyDisplay(1234567.8)).toBe("1,234,567.80");
  });

  test("formats thousands", () => {
    expect(moneyDisplay(1000)).toBe("1,000.00");
  });

  test("formats zero", () => {
    expect(moneyDisplay(0)).toBe("0.00");
  });

  test("formats number under 1000", () => {
    expect(moneyDisplay(999.99)).toBe("999.99");
  });

  test("formats ten thousand", () => {
    expect(moneyDisplay(10000.5)).toBe("10,000.50");
  });
});
