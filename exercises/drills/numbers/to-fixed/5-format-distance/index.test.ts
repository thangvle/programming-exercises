import { test, expect, describe } from "bun:test";
import { formatDistance } from ".";

describe("formatDistance", () => {
  test("formats with rounding", () => {
    expect(formatDistance(12.456)).toBe("12.5 km");
  });

  test("formats whole number", () => {
    expect(formatDistance(5)).toBe("5.0 km");
  });

  test("formats zero", () => {
    expect(formatDistance(0)).toBe("0.0 km");
  });

  test("formats already 1-decimal value", () => {
    expect(formatDistance(3.7)).toBe("3.7 km");
  });

  test("formats large distance", () => {
    expect(formatDistance(100.99)).toBe("101.0 km");
  });
});
