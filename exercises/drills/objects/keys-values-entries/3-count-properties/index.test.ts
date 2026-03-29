import { test, expect, describe } from "bun:test";
import { countProperties } from ".";

describe("countProperties", () => {
  test("counts properties of a 3-property object", () => {
    expect(countProperties({ a: 1, b: 2, c: 3 })).toBe(3);
  });

  test("returns 0 for empty object", () => {
    expect(countProperties({})).toBe(0);
  });

  test("counts single property", () => {
    expect(countProperties({ x: 10 })).toBe(1);
  });

  test("counts properties with mixed value types", () => {
    expect(countProperties({ a: 1, b: "two", c: true, d: null })).toBe(4);
  });

  test("counts five properties", () => {
    expect(countProperties({ v: 1, w: 2, x: 3, y: 4, z: 5 })).toBe(5);
  });
});
