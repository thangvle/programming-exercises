import { test, expect, describe } from "bun:test";
import { truthyValues } from ".";

describe("truthyValues", () => {
  test("removes all falsy values", () => {
    expect(truthyValues([0, "", null, "hi", 1, undefined])).toEqual(["hi", 1]);
  });

  test("returns empty when all falsy", () => {
    expect(truthyValues([false, 0, ""])).toEqual([]);
  });

  test("keeps all when all truthy", () => {
    expect(truthyValues([1, "hello", true, []])).toEqual([1, "hello", true, []]);
  });

  test("handles empty array", () => {
    expect(truthyValues([])).toEqual([]);
  });

  test("removes NaN", () => {
    expect(truthyValues([NaN, 1, "a"])).toEqual([1, "a"]);
  });
});
