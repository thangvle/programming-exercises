import { test, expect, describe } from "bun:test";
import { longest } from ".";

describe("longest", () => {
  test("finds longest from mixed lengths", () => {
    expect(longest(["hi", "hello", "hey"])).toEqual("hello");
  });

  test("finds longest from two strings", () => {
    expect(longest(["a", "bb"])).toEqual("bb");
  });

  test("returns first when tied", () => {
    expect(longest(["abc", "def"])).toEqual("abc");
  });

  test("handles single element", () => {
    expect(longest(["only"])).toEqual("only");
  });

  test("handles empty strings in array", () => {
    expect(longest(["", "a", "bb"])).toEqual("bb");
  });
});
