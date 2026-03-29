import { test, expect, describe } from "bun:test";
import { getValues } from ".";

describe("getValues", () => {
  test("returns values of a simple object", () => {
    expect(getValues({ a: 1, b: 2 })).toEqual([1, 2]);
  });

  test("returns empty array for empty object", () => {
    expect(getValues({})).toEqual([]);
  });

  test("returns string values", () => {
    expect(getValues({ name: "Alice", city: "Paris" })).toEqual(["Alice", "Paris"]);
  });

  test("returns mixed type values", () => {
    expect(getValues({ a: 1, b: "two", c: true })).toEqual([1, "two", true]);
  });

  test("returns values of single-property object", () => {
    expect(getValues({ x: 42 })).toEqual([42]);
  });
});
