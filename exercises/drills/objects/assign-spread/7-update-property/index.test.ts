import { test, expect, describe } from "bun:test";
import { updateProperty } from ".";

describe("updateProperty", () => {
  test("updates an existing property", () => {
    expect(updateProperty({ name: "A", age: 20 }, "age", 21)).toEqual({ name: "A", age: 21 });
  });

  test("does not mutate original object", () => {
    const original = { a: 1, b: 2 };
    updateProperty(original, "a", 99);
    expect(original).toEqual({ a: 1, b: 2 });
  });

  test("updates single property object", () => {
    expect(updateProperty({ x: 1 }, "x", 99)).toEqual({ x: 99 });
  });

  test("updates string value", () => {
    expect(updateProperty({ name: "Alice" }, "name", "Bob")).toEqual({ name: "Bob" });
  });

  test("adds property if key does not exist", () => {
    expect(updateProperty({ a: 1 }, "b", 2)).toEqual({ a: 1, b: 2 });
  });
});
