import { test, expect, describe } from "bun:test";
import { capitalizeWords } from "./index";

describe("capitalizeWords", () => {
  test("capitalizes two words", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
  });

  test("capitalizes single word", () => {
    expect(capitalizeWords("hello")).toBe("Hello");
  });

  test("already capitalized stays the same", () => {
    expect(capitalizeWords("Hello World")).toBe("Hello World");
  });

  test("capitalizes all lowercase", () => {
    expect(capitalizeWords("the quick brown fox")).toBe("The Quick Brown Fox");
  });

  test("single character words", () => {
    expect(capitalizeWords("a b c")).toBe("A B C");
  });
});
