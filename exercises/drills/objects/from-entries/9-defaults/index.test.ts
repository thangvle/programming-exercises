import { test, expect, describe } from "bun:test";
import { defaults } from ".";

describe("defaults", () => {
  test("first object wins for existing keys", () => {
    expect(defaults({ a: 1 }, { a: 0, b: 2 })).toEqual({ a: 1, b: 2 });
  });

  test("uses all defaults when object is empty", () => {
    expect(defaults({}, { a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
  });

  test("returns object as-is when no new defaults", () => {
    expect(defaults({ a: 1, b: 2 }, {})).toEqual({ a: 1, b: 2 });
  });

  test("merges multiple default values", () => {
    expect(defaults({ color: "blue" }, { color: "red", size: 10, visible: true })).toEqual({
      color: "blue",
      size: 10,
      visible: true,
    });
  });

  test("both empty returns empty", () => {
    expect(defaults({}, {})).toEqual({});
  });
});
