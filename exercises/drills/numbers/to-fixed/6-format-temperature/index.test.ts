import { test, expect, describe } from "bun:test";
import { formatTemp } from ".";

describe("formatTemp", () => {
  test("formats Fahrenheit", () => {
    expect(formatTemp(98.678, "F")).toBe("98.7°F");
  });

  test("formats Celsius", () => {
    expect(formatTemp(36.6, "C")).toBe("36.6°C");
  });

  test("formats zero degrees", () => {
    expect(formatTemp(0, "C")).toBe("0.0°C");
  });

  test("formats negative temperature", () => {
    expect(formatTemp(-40, "F")).toBe("-40.0°F");
  });

  test("formats whole number temperature", () => {
    expect(formatTemp(100, "C")).toBe("100.0°C");
  });
});
