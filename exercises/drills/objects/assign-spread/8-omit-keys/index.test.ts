import { test, expect, describe } from "bun:test";
import { omitKeys } from ".";

describe("omitKeys", () => {
  test("omits specified keys", () => {
    expect(omitKeys({ a: 1, b: 2, c: 3, d: 4 }, ["b", "d"])).toEqual({ a: 1, c: 3 });
  });

  test("omits all keys", () => {
    expect(omitKeys({ a: 1 }, ["a"])).toEqual({});
  });

  test("returns same object when omitting no keys", () => {
    expect(omitKeys({ a: 1, b: 2 }, [])).toEqual({ a: 1, b: 2 });
  });

  test("ignores keys that do not exist", () => {
    expect(omitKeys({ a: 1 }, ["b", "c"])).toEqual({ a: 1 });
  });

  test("omits single key from multiple", () => {
    expect(omitKeys({ x: 1, y: 2, z: 3 }, ["y"])).toEqual({ x: 1, z: 3 });
  });
});
