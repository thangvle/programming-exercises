import { test, expect, describe } from "bun:test";
import { mapValues } from ".";

describe("mapValues", () => {
  test("doubles each value", () => {
    expect(mapValues({ a: 1, b: 2 }, (v) => v * 2)).toEqual({ a: 2, b: 4 });
  });

  test("increments each value", () => {
    expect(mapValues({ x: 5, y: 10 }, (v) => v + 1)).toEqual({ x: 6, y: 11 });
  });

  test("handles empty object", () => {
    expect(mapValues({}, (v) => v * 2)).toEqual({});
  });

  test("squares each value", () => {
    expect(mapValues({ a: 2, b: 3, c: 4 }, (v) => v * v)).toEqual({ a: 4, b: 9, c: 16 });
  });

  test("negates each value", () => {
    expect(mapValues({ a: 1, b: -2 }, (v) => -v)).toEqual({ a: -1, b: 2 });
  });
});
