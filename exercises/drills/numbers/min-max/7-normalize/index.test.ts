import { test, expect, describe } from "bun:test";
import { normalize } from ".";

describe("normalize", () => {
  test("normalizes middle value to 0.5", () => {
    expect(normalize(50, 0, 100)).toBe(0.5);
  });

  test("normalizes min to 0", () => {
    expect(normalize(0, 0, 100)).toBe(0);
  });

  test("normalizes max to 1", () => {
    expect(normalize(100, 0, 100)).toBe(1);
  });

  test("normalizes with non-zero min", () => {
    expect(normalize(15, 10, 20)).toBe(0.5);
  });

  test("normalizes quarter value to 0.25", () => {
    expect(normalize(25, 0, 100)).toBe(0.25);
  });
});
