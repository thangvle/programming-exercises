import { test, expect, describe } from "bun:test";
import { allTruthy } from "./index";

describe("allTruthy", () => {
  test("returns true when all values are truthy", () => {
    expect(allTruthy([1, "hi", true])).toBe(true);
  });

  test("returns false when zero is present", () => {
    expect(allTruthy([1, 0, true])).toBe(false);
  });

  test("returns false when null is present", () => {
    expect(allTruthy([null, "hi"])).toBe(false);
  });

  test("returns true for objects and arrays", () => {
    expect(allTruthy(["a", 1, {}, []])).toBe(true);
  });

  test("returns false when empty string is present", () => {
    expect(allTruthy([1, "", true])).toBe(false);
  });
});
