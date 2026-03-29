import { test, expect, describe } from "bun:test";
import { flattenValues } from "./index";

describe("flattenValues", () => {
  test("flattens number arrays from object", () => {
    expect(flattenValues({ a: [1, 2], b: [3, 4] })).toEqual([1, 2, 3, 4]);
  });

  test("flattens string arrays from object", () => {
    expect(flattenValues({ x: ["hello"], y: ["world"] })).toEqual(["hello", "world"]);
  });

  test("handles single key", () => {
    expect(flattenValues({ one: [1] })).toEqual([1]);
  });

  test("handles varying array lengths", () => {
    expect(flattenValues({ a: [1, 2, 3], b: [4] })).toEqual([1, 2, 3, 4]);
  });

  test("handles empty object", () => {
    expect(flattenValues({})).toEqual([]);
  });
});
