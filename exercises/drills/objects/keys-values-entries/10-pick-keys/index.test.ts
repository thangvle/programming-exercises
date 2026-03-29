import { test, expect, describe } from "bun:test";
import { pickKeys } from ".";

describe("pickKeys", () => {
  test("picks specified keys", () => {
    expect(pickKeys({ a: 1, b: 2, c: 3 }, ["a", "c"])).toEqual({ a: 1, c: 3 });
  });

  test("picks single key", () => {
    expect(pickKeys({ a: 1, b: 2 }, ["a"])).toEqual({ a: 1 });
  });

  test("returns empty object when picking no keys", () => {
    expect(pickKeys({ a: 1, b: 2 }, [])).toEqual({});
  });

  test("ignores keys that do not exist", () => {
    expect(pickKeys({ a: 1 }, ["a", "b"])).toEqual({ a: 1 });
  });

  test("picks all keys", () => {
    expect(pickKeys({ x: 10, y: 20 }, ["x", "y"])).toEqual({ x: 10, y: 20 });
  });
});
