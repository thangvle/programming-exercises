import { test, expect, describe } from "bun:test";
import { allPresent } from ".";

describe("allPresent", () => {
  test("returns true when all values present", () => {
    expect(allPresent([1, 2, 3, 4], [2, 4])).toEqual(true);
  });

  test("returns false when some values missing", () => {
    expect(allPresent([1, 2, 3], [2, 5])).toEqual(false);
  });

  test("returns true for empty values array", () => {
    expect(allPresent([1, 2, 3], [])).toEqual(true);
  });

  test("returns false for empty source array with values", () => {
    expect(allPresent([], [1])).toEqual(false);
  });

  test("works with strings", () => {
    expect(allPresent(["a", "b", "c"], ["a", "c"])).toEqual(true);
  });
});
