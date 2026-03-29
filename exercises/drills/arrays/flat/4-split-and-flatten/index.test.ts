import { test, expect, describe } from "bun:test";
import { splitAndFlatten } from "./index";

describe("splitAndFlatten", () => {
  test("splits and flattens two phrases", () => {
    expect(splitAndFlatten(["hello world", "foo bar"])).toEqual(["hello", "world", "foo", "bar"]);
  });

  test("splits a single phrase with three words", () => {
    expect(splitAndFlatten(["one two three"])).toEqual(["one", "two", "three"]);
  });

  test("handles a single word", () => {
    expect(splitAndFlatten(["single"])).toEqual(["single"]);
  });

  test("splits three phrases", () => {
    expect(splitAndFlatten(["a b", "c d", "e f"])).toEqual(["a", "b", "c", "d", "e", "f"]);
  });

  test("handles an empty array", () => {
    expect(splitAndFlatten([])).toEqual([]);
  });
});
