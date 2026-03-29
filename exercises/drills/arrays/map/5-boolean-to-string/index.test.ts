import { test, expect, describe } from "bun:test";
import { boolToString } from ".";

describe("boolToString", () => {
  test("converts mixed booleans", () => {
    expect(boolToString([true, false, true])).toEqual(["yes", "no", "yes"]);
  });

  test("converts all true", () => {
    expect(boolToString([true, true, true])).toEqual(["yes", "yes", "yes"]);
  });

  test("converts all false", () => {
    expect(boolToString([false, false])).toEqual(["no", "no"]);
  });

  test("returns empty array for empty input", () => {
    expect(boolToString([])).toEqual([]);
  });

  test("handles single element", () => {
    expect(boolToString([true])).toEqual(["yes"]);
  });
});
