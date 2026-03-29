import { test, expect, describe } from "bun:test";
import { extractSubstring } from "./index";

describe("extractSubstring", () => {
  test("extracts from middle", () => {
    expect(extractSubstring("hello world", 0, 5)).toBe("hello");
  });

  test("extracts single char", () => {
    expect(extractSubstring("abcdef", 2, 3)).toBe("c");
  });

  test("extracts from end", () => {
    expect(extractSubstring("hello world", 6, 11)).toBe("world");
  });

  test("extracts entire string", () => {
    expect(extractSubstring("abc", 0, 3)).toBe("abc");
  });

  test("same start and end returns empty", () => {
    expect(extractSubstring("hello", 2, 2)).toBe("");
  });
});
