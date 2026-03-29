import { test, expect, describe } from "bun:test";
import { removeFirstChar } from "./index";

describe("removeFirstChar", () => {
  test("removes first char from hello", () => {
    expect(removeFirstChar("hello")).toBe("ello");
  });

  test("removes first char from a single char string", () => {
    expect(removeFirstChar("a")).toBe("");
  });

  test("removes first char from two char string", () => {
    expect(removeFirstChar("ab")).toBe("b");
  });

  test("works with spaces", () => {
    expect(removeFirstChar(" hi")).toBe("hi");
  });

  test("works with numbers in string", () => {
    expect(removeFirstChar("123")).toBe("23");
  });
});
