import { test, expect, describe } from "bun:test";
import { overrideDefaults } from ".";

describe("overrideDefaults", () => {
  test("user config overrides defaults", () => {
    expect(overrideDefaults({ color: "red", size: 10 }, { color: "blue" })).toEqual({
      color: "blue",
      size: 10,
    });
  });

  test("returns defaults when overrides is empty", () => {
    expect(overrideDefaults({ a: 1 }, {})).toEqual({ a: 1 });
  });

  test("returns overrides when defaults is empty", () => {
    expect(overrideDefaults({}, { a: 1 })).toEqual({ a: 1 });
  });

  test("overrides all properties", () => {
    expect(overrideDefaults({ a: 1, b: 2 }, { a: 10, b: 20 })).toEqual({ a: 10, b: 20 });
  });

  test("merges non-overlapping properties", () => {
    expect(overrideDefaults({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });
});
