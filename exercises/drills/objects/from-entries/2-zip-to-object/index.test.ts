import { test, expect, describe } from "bun:test";
import { zipToObject } from ".";

describe("zipToObject", () => {
  test("zips keys and values together", () => {
    expect(zipToObject(["a", "b"], [1, 2])).toEqual({ a: 1, b: 2 });
  });

  test("returns empty object for empty arrays", () => {
    expect(zipToObject([], [])).toEqual({});
  });

  test("zips single key-value pair", () => {
    expect(zipToObject(["name"], ["Alice"])).toEqual({ name: "Alice" });
  });

  test("zips three pairs", () => {
    expect(zipToObject(["x", "y", "z"], [10, 20, 30])).toEqual({ x: 10, y: 20, z: 30 });
  });

  test("zips with mixed value types", () => {
    expect(zipToObject(["a", "b", "c"], [1, "two", true])).toEqual({ a: 1, b: "two", c: true });
  });
});
