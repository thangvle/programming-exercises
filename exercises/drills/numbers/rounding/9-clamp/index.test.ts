import { test, expect, describe } from "bun:test";
import { clamp } from ".";

describe("clamp", () => {
  test("clamps above max to max", () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  test("clamps below min to min", () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  test("returns value when within range", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  test("returns min when value equals min", () => {
    expect(clamp(0, 0, 10)).toBe(0);
  });

  test("returns max when value equals max", () => {
    expect(clamp(10, 0, 10)).toBe(10);
  });
});
