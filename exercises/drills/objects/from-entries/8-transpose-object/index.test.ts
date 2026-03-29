import { test, expect, describe } from "bun:test";
import { transpose } from ".";

describe("transpose", () => {
  test("transposes two arrays of length 2", () => {
    expect(transpose({ a: [1, 2], b: [3, 4] })).toEqual([
      { a: 1, b: 3 },
      { a: 2, b: 4 },
    ]);
  });

  test("transposes single key with single element", () => {
    expect(transpose({ x: [10] })).toEqual([{ x: 10 }]);
  });

  test("transposes three keys", () => {
    expect(transpose({ a: [1, 2], b: [3, 4], c: [5, 6] })).toEqual([
      { a: 1, b: 3, c: 5 },
      { a: 2, b: 4, c: 6 },
    ]);
  });

  test("transposes arrays of length 3", () => {
    expect(transpose({ x: [1, 2, 3], y: [4, 5, 6] })).toEqual([
      { x: 1, y: 4 },
      { x: 2, y: 5 },
      { x: 3, y: 6 },
    ]);
  });

  test("transposes with string values", () => {
    expect(transpose({ name: ["Alice", "Bob"], age: [30, 25] })).toEqual([
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
    ]);
  });
});
