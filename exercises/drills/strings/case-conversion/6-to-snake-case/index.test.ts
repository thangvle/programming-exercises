import { test, expect, describe } from "bun:test";
import { toSnakeCase } from ".";

describe("toSnakeCase", () => {
  test("converts two words", () => {
    expect(toSnakeCase("Hello World")).toBe("hello_world");
  });

  test("converts three words", () => {
    expect(toSnakeCase("Foo Bar Baz")).toBe("foo_bar_baz");
  });

  test("handles already lowercase", () => {
    expect(toSnakeCase("hello world")).toBe("hello_world");
  });

  test("handles single word", () => {
    expect(toSnakeCase("Hello")).toBe("hello");
  });

  test("handles all uppercase words", () => {
    expect(toSnakeCase("HELLO WORLD")).toBe("hello_world");
  });
});
