import { test, expect, describe } from "bun:test";
import { keyOfMax } from ".";

describe("keyOfMax", () => {
  test("finds key with highest value", () => {
    expect(keyOfMax({ a: 1, b: 5, c: 3 })).toBe("b");
  });

  test("returns key of single-property object", () => {
    expect(keyOfMax({ x: 10 })).toBe("x");
  });

  test("finds key when max is first", () => {
    expect(keyOfMax({ a: 100, b: 50, c: 25 })).toBe("a");
  });

  test("finds key when max is last", () => {
    expect(keyOfMax({ a: 1, b: 2, c: 99 })).toBe("c");
  });

  test("handles negative values", () => {
    expect(keyOfMax({ a: -5, b: -1, c: -10 })).toBe("b");
  });
});
