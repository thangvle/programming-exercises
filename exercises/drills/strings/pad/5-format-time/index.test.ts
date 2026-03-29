import { test, expect, describe } from "bun:test";
import { formatTime } from ".";

describe("formatTime", () => {
  test("pads single digit hours and minutes", () => {
    expect(formatTime(9, 5)).toBe("09:05");
  });

  test("keeps two digit hours and minutes", () => {
    expect(formatTime(12, 30)).toBe("12:30");
  });

  test("handles midnight", () => {
    expect(formatTime(0, 0)).toBe("00:00");
  });

  test("handles single digit hour", () => {
    expect(formatTime(1, 45)).toBe("01:45");
  });

  test("handles single digit minute", () => {
    expect(formatTime(23, 7)).toBe("23:07");
  });
});
