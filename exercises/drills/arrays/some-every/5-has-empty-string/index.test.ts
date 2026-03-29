import { test, expect, describe } from "bun:test";
import { hasEmptyString } from "./index";

describe("hasEmptyString", () => {
  test("returns true when an empty string is present", () => {
    expect(hasEmptyString(["hi", "", "bye"])).toBe(true);
  });

  test("returns false when no empty string is present", () => {
    expect(hasEmptyString(["hi", "bye"])).toBe(false);
  });

  test("returns true for a single empty string", () => {
    expect(hasEmptyString([""])).toBe(true);
  });

  test("returns false for non-empty strings", () => {
    expect(hasEmptyString(["a", "b", "c"])).toBe(false);
  });

  test("returns false for an empty array", () => {
    expect(hasEmptyString([])).toBe(false);
  });
});
