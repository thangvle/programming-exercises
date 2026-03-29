import { test, expect, describe } from "bun:test";
import { toSentence } from "./index";

describe("toSentence", () => {
  test("joins three items with Oxford comma", () => {
    expect(toSentence(["apples", "bananas", "cherries"])).toBe("apples, bananas, and cherries");
  });

  test("joins two items with and", () => {
    expect(toSentence(["cats", "dogs"])).toBe("cats and dogs");
  });

  test("returns single item as-is", () => {
    expect(toSentence(["hello"])).toBe("hello");
  });

  test("joins four items with Oxford comma", () => {
    expect(toSentence(["a", "b", "c", "d"])).toBe("a, b, c, and d");
  });

  test("returns empty string for empty array", () => {
    expect(toSentence([])).toBe("");
  });
});
