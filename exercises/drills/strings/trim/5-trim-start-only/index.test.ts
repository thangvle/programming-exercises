import { test, expect, describe } from "bun:test";
import { trimStartOnly } from ".";

describe("trimStartOnly", () => {
  test("trims leading spaces, keeps trailing", () => {
    expect(trimStartOnly("  hello  ")).toBe("hello  ");
  });

  test("trims leading tab", () => {
    expect(trimStartOnly("\thello")).toBe("hello");
  });

  test("returns same string when no leading whitespace", () => {
    expect(trimStartOnly("hello  ")).toBe("hello  ");
  });

  test("handles only leading whitespace", () => {
    expect(trimStartOnly("   hello")).toBe("hello");
  });

  test("handles empty string", () => {
    expect(trimStartOnly("")).toBe("");
  });
});
