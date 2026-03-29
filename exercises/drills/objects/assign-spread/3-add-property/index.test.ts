import { test, expect, describe } from "bun:test";
import { addProperty } from ".";

describe("addProperty", () => {
  test("adds property to existing object", () => {
    expect(addProperty({ a: 1 }, "b", 2)).toEqual({ a: 1, b: 2 });
  });

  test("adds property to empty object", () => {
    expect(addProperty({}, "x", 10)).toEqual({ x: 10 });
  });

  test("does not mutate original object", () => {
    const original = { a: 1 };
    addProperty(original, "b", 2);
    expect(original).toEqual({ a: 1 });
  });

  test("adds string value", () => {
    expect(addProperty({ name: "Alice" }, "role", "admin")).toEqual({ name: "Alice", role: "admin" });
  });

  test("overrides existing key", () => {
    expect(addProperty({ a: 1 }, "a", 99)).toEqual({ a: 99 });
  });
});
