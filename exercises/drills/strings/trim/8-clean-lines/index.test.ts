import { test, expect, describe } from "bun:test";
import { cleanLines } from ".";

describe("cleanLines", () => {
  test("trims lines and removes empty ones", () => {
    expect(cleanLines("  hello\n  \n  world  ")).toEqual(["hello", "world"]);
  });

  test("handles clean lines", () => {
    expect(cleanLines("a\nb\nc")).toEqual(["a", "b", "c"]);
  });

  test("filters out whitespace-only lines", () => {
    expect(cleanLines("hello\n   \n   \nworld")).toEqual(["hello", "world"]);
  });

  test("handles single line", () => {
    expect(cleanLines("  hello  ")).toEqual(["hello"]);
  });

  test("returns empty array for whitespace-only input", () => {
    expect(cleanLines("  \n  \n  ")).toEqual([]);
  });
});
