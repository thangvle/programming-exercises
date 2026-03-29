import { test, expect, describe } from "bun:test";
import { removeProperty } from ".";

describe("removeProperty", () => {
  test("removes a middle property", () => {
    expect(removeProperty({ a: 1, b: 2, c: 3 }, "b")).toEqual({ a: 1, c: 3 });
  });

  test("removes the only property", () => {
    expect(removeProperty({ x: 10 }, "x")).toEqual({});
  });

  test("does not mutate original object", () => {
    const original = { a: 1, b: 2 };
    removeProperty(original, "b");
    expect(original).toEqual({ a: 1, b: 2 });
  });

  test("returns same properties when key does not exist", () => {
    expect(removeProperty({ a: 1 }, "z")).toEqual({ a: 1 });
  });

  test("removes first property", () => {
    expect(removeProperty({ a: 1, b: 2, c: 3 }, "a")).toEqual({ b: 2, c: 3 });
  });
});
