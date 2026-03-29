import { test, expect, describe } from "bun:test";
import { findShortest } from ".";

describe("findShortest", () => {
  test("finds shortest string", () => {
    expect(findShortest(["hello", "hi", "hey"])).toEqual("hi");
  });

  test("finds shortest at beginning", () => {
    expect(findShortest(["a", "bb", "ccc"])).toEqual("a");
  });

  test("returns first when tied", () => {
    expect(findShortest(["ab", "cd", "ef"])).toEqual("ab");
  });

  test("handles single element", () => {
    expect(findShortest(["only"])).toEqual("only");
  });

  test("finds empty string as shortest", () => {
    expect(findShortest(["hello", "", "hi"])).toEqual("");
  });
});
