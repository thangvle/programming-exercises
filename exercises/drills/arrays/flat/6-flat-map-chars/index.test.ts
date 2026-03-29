import { test, expect, describe } from "bun:test";
import { flatMapChars } from "./index";

describe("flatMapChars", () => {
  test("splits two short strings into chars", () => {
    expect(flatMapChars(["hi", "ok"])).toEqual(["h", "i", "o", "k"]);
  });

  test("splits a single string into chars", () => {
    expect(flatMapChars(["abc"])).toEqual(["a", "b", "c"]);
  });

  test("handles single-char strings", () => {
    expect(flatMapChars(["a", "b"])).toEqual(["a", "b"]);
  });

  test("splits two words into chars", () => {
    expect(flatMapChars(["hey", "yo"])).toEqual(["h", "e", "y", "y", "o"]);
  });

  test("handles an empty array", () => {
    expect(flatMapChars([])).toEqual([]);
  });
});
