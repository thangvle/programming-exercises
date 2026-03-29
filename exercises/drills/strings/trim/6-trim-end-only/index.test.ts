import { test, expect, describe } from "bun:test";
import { trimEndOnly } from ".";

describe("trimEndOnly", () => {
  test("trims trailing spaces, keeps leading", () => {
    expect(trimEndOnly("  hello  ")).toBe("  hello");
  });

  test("trims trailing newline", () => {
    expect(trimEndOnly("hello\n")).toBe("hello");
  });

  test("returns same string when no trailing whitespace", () => {
    expect(trimEndOnly("  hello")).toBe("  hello");
  });

  test("handles only trailing whitespace", () => {
    expect(trimEndOnly("hello   ")).toBe("hello");
  });

  test("handles empty string", () => {
    expect(trimEndOnly("")).toBe("");
  });
});
