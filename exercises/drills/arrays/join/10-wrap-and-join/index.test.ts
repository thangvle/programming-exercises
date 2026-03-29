import { test, expect, describe } from "bun:test";
import { wrapAndJoin } from "./index";

describe("wrapAndJoin", () => {
  test("wraps and joins three strings", () => {
    expect(wrapAndJoin(["a", "b", "c"])).toBe('"a", "b", "c"');
  });

  test("wraps a single string", () => {
    expect(wrapAndJoin(["hello"])).toBe('"hello"');
  });

  test("wraps and joins two strings", () => {
    expect(wrapAndJoin(["x", "y"])).toBe('"x", "y"');
  });

  test("wraps and joins two words", () => {
    expect(wrapAndJoin(["one", "two"])).toBe('"one", "two"');
  });

  test("returns empty string for empty array", () => {
    expect(wrapAndJoin([])).toBe("");
  });
});
