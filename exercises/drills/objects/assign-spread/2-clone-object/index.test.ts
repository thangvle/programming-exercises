import { test, expect, describe } from "bun:test";
import { cloneObject } from ".";

describe("cloneObject", () => {
  test("clone has same properties", () => {
    expect(cloneObject({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
  });

  test("clone is a different reference", () => {
    const original = { a: 1 };
    const clone = cloneObject(original);
    expect(clone).not.toBe(original);
  });

  test("clones empty object", () => {
    expect(cloneObject({})).toEqual({});
  });

  test("modifying clone does not affect original", () => {
    const original = { a: 1, b: 2 };
    const clone = cloneObject(original);
    clone.a = 99;
    expect(original.a).toBe(1);
  });

  test("clones object with mixed values", () => {
    expect(cloneObject({ x: "hello", y: 42, z: true })).toEqual({ x: "hello", y: 42, z: true });
  });
});
