import { test, expect, describe } from "bun:test";
import { sortByLastChar } from "./index";

describe("sortByLastChar", () => {
  test("sorts by last character", () => {
    expect(sortByLastChar(["cab", "abc", "bca"])).toEqual(["bca", "cab", "abc"]);
  });

  test("sorts last chars in reverse alphabetical input", () => {
    expect(sortByLastChar(["az", "by", "cx"])).toEqual(["cx", "by", "az"]);
  });

  test("handles a single string", () => {
    expect(sortByLastChar(["hello"])).toEqual(["hello"]);
  });

  test("sorts mixed last characters", () => {
    expect(sortByLastChar(["bed", "ace", "bag"])).toEqual(["bed", "ace", "bag"]);
  });

  test("handles an empty array", () => {
    expect(sortByLastChar([])).toEqual([]);
  });
});
