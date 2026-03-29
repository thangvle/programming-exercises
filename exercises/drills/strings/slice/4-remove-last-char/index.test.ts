import { test, expect, describe } from "bun:test";
import { removeLastChar } from "./index";

describe("removeLastChar", () => {
  test("removes last char from hello", () => {
    expect(removeLastChar("hello")).toBe("hell");
  });

  test("removes last char from a single char string", () => {
    expect(removeLastChar("a")).toBe("");
  });

  test("removes last char from two char string", () => {
    expect(removeLastChar("ab")).toBe("a");
  });

  test("works with spaces at end", () => {
    expect(removeLastChar("hi ")).toBe("hi");
  });

  test("works with numbers in string", () => {
    expect(removeLastChar("123")).toBe("12");
  });
});
