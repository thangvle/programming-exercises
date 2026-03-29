import { test, expect, describe } from "bun:test";
import { groupByLength } from ".";

describe("groupByLength", () => {
  test("groups strings by length", () => {
    expect(groupByLength(["hi", "hey", "hello", "ok"])).toEqual({
      2: ["hi", "ok"],
      3: ["hey"],
      5: ["hello"],
    });
  });

  test("groups same-length strings together", () => {
    expect(groupByLength(["a", "b"])).toEqual({ 1: ["a", "b"] });
  });

  test("handles single string", () => {
    expect(groupByLength(["test"])).toEqual({ 4: ["test"] });
  });

  test("handles empty array", () => {
    expect(groupByLength([])).toEqual({});
  });

  test("handles various lengths", () => {
    expect(groupByLength(["a", "bb", "ccc"])).toEqual({
      1: ["a"],
      2: ["bb"],
      3: ["ccc"],
    });
  });
});
