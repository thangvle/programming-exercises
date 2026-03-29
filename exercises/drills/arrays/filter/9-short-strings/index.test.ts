import { test, expect, describe } from "bun:test";
import { shortStrings } from ".";

describe("shortStrings", () => {
  test("keeps strings with length <= 2", () => {
    expect(shortStrings(["a", "bb", "ccc", "dddd"], 2)).toEqual(["a", "bb"]);
  });

  test("keeps strings with length <= 3", () => {
    expect(shortStrings(["hello", "hi", "hey"], 3)).toEqual(["hi", "hey"]);
  });

  test("returns all when all qualify", () => {
    expect(shortStrings(["a", "b"], 5)).toEqual(["a", "b"]);
  });

  test("returns empty when none qualify", () => {
    expect(shortStrings(["hello", "world"], 1)).toEqual([]);
  });

  test("handles empty array", () => {
    expect(shortStrings([], 3)).toEqual([]);
  });
});
