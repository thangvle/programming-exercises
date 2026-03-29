import { test, expect, describe } from "bun:test";
import { getKeys } from ".";

describe("getKeys", () => {
  test("returns keys of a simple object", () => {
    expect(getKeys({ a: 1, b: 2 })).toEqual(["a", "b"]);
  });

  test("returns empty array for empty object", () => {
    expect(getKeys({})).toEqual([]);
  });

  test("returns keys of object with three properties", () => {
    expect(getKeys({ x: 10, y: 20, z: 30 })).toEqual(["x", "y", "z"]);
  });

  test("returns keys when values are strings", () => {
    expect(getKeys({ name: "Alice", role: "admin" })).toEqual(["name", "role"]);
  });

  test("returns keys of single-property object", () => {
    expect(getKeys({ only: true })).toEqual(["only"]);
  });
});
