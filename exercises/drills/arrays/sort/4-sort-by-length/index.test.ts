import { test, expect, describe } from "bun:test";
import { sortByLength } from "./index";

describe("sortByLength", () => {
  test("sorts by length shortest first", () => {
    expect(sortByLength(["hello", "hi", "hey"])).toEqual(["hi", "hey", "hello"]);
  });

  test("sorts varying lengths", () => {
    expect(sortByLength(["a", "bbb", "cc"])).toEqual(["a", "cc", "bbb"]);
  });

  test("preserves order for same length", () => {
    expect(sortByLength(["same", "size"])).toEqual(["same", "size"]);
  });

  test("handles a single element", () => {
    expect(sortByLength(["one"])).toEqual(["one"]);
  });

  test("handles an empty array", () => {
    expect(sortByLength([])).toEqual([]);
  });
});
