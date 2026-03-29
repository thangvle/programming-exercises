import { test, expect, describe } from "bun:test";
import { toUpperCase } from ".";

describe("toUpperCase", () => {
  test("converts lowercase strings", () => {
    expect(toUpperCase(["hi", "bye"])).toEqual(["HI", "BYE"]);
  });

  test("handles already uppercase strings", () => {
    expect(toUpperCase(["HELLO", "WORLD"])).toEqual(["HELLO", "WORLD"]);
  });

  test("handles mixed case strings", () => {
    expect(toUpperCase(["Hello", "wOrLd"])).toEqual(["HELLO", "WORLD"]);
  });

  test("returns empty array for empty input", () => {
    expect(toUpperCase([])).toEqual([]);
  });

  test("handles single element", () => {
    expect(toUpperCase(["test"])).toEqual(["TEST"]);
  });
});
