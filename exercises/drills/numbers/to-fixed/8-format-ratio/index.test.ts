import { test, expect, describe } from "bun:test";
import { formatRatio } from ".";

describe("formatRatio", () => {
  test("formats 1/3", () => {
    expect(formatRatio(1, 3)).toBe("0.333");
  });

  test("formats 1/2", () => {
    expect(formatRatio(1, 2)).toBe("0.500");
  });

  test("formats 1/1", () => {
    expect(formatRatio(1, 1)).toBe("1.000");
  });

  test("formats 2/3", () => {
    expect(formatRatio(2, 3)).toBe("0.667");
  });

  test("formats 0/5", () => {
    expect(formatRatio(0, 5)).toBe("0.000");
  });
});
