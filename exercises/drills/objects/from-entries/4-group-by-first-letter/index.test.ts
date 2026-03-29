import { test, expect, describe } from "bun:test";
import { groupByFirstLetter } from ".";

describe("groupByFirstLetter", () => {
  test("groups words by first letter", () => {
    expect(groupByFirstLetter(["apple", "banana", "avocado"])).toEqual({
      a: ["apple", "avocado"],
      b: ["banana"],
    });
  });

  test("returns empty object for empty array", () => {
    expect(groupByFirstLetter([])).toEqual({});
  });

  test("groups single word", () => {
    expect(groupByFirstLetter(["hello"])).toEqual({ h: ["hello"] });
  });

  test("groups all words under same letter", () => {
    expect(groupByFirstLetter(["ant", "ape", "axe"])).toEqual({
      a: ["ant", "ape", "axe"],
    });
  });

  test("groups multiple letters", () => {
    expect(groupByFirstLetter(["cat", "car", "dog", "dot"])).toEqual({
      c: ["cat", "car"],
      d: ["dog", "dot"],
    });
  });
});
