import { test, expect, describe } from "bun:test";
import { hasKey } from ".";

describe("hasKey", () => {
  test("returns true when key exists", () => {
    expect(hasKey({ a: 1, b: 2 }, "a")).toBe(true);
  });

  test("returns false when key does not exist", () => {
    expect(hasKey({ a: 1, b: 2 }, "c")).toBe(false);
  });

  test("returns false for empty object", () => {
    expect(hasKey({}, "a")).toBe(false);
  });

  test("returns true even when value is undefined", () => {
    expect(hasKey({ a: undefined }, "a")).toBe(true);
  });

  test("returns true for last key in object", () => {
    expect(hasKey({ x: 1, y: 2, z: 3 }, "z")).toBe(true);
  });
});
