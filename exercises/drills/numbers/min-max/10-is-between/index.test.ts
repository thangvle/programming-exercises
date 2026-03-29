import { test, expect, describe } from "bun:test";
import { isBetween } from ".";

describe("isBetween", () => {
  test("returns true when value is in range", () => {
    expect(isBetween(5, 1, 10)).toBe(true);
  });

  test("returns false when value is above range", () => {
    expect(isBetween(15, 1, 10)).toBe(false);
  });

  test("returns false when value is below range", () => {
    expect(isBetween(0, 1, 10)).toBe(false);
  });

  test("returns true when value equals min", () => {
    expect(isBetween(1, 1, 10)).toBe(true);
  });

  test("returns true when value equals max", () => {
    expect(isBetween(10, 1, 10)).toBe(true);
  });
});
