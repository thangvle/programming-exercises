import { test, expect, describe } from "bun:test";
import { formatPercent } from ".";

describe("formatPercent", () => {
  test("formats 0.856 as 85.6%", () => {
    expect(formatPercent(0.856)).toBe("85.6%");
  });

  test("formats 1 as 100.0%", () => {
    expect(formatPercent(1)).toBe("100.0%");
  });

  test("formats 0 as 0.0%", () => {
    expect(formatPercent(0)).toBe("0.0%");
  });

  test("formats 0.5 as 50.0%", () => {
    expect(formatPercent(0.5)).toBe("50.0%");
  });

  test("formats 0.3333 as 33.3%", () => {
    expect(formatPercent(0.3333)).toBe("33.3%");
  });
});
