import { test, expect, describe } from "bun:test";
import { spacesToUnderscores } from ".";

describe("spacesToUnderscores", () => {
  test("replaces single space", () => {
    expect(spacesToUnderscores("hello world")).toBe("hello_world");
  });

  test("replaces multiple spaces", () => {
    expect(spacesToUnderscores("a b c")).toBe("a_b_c");
  });

  test("handles no spaces", () => {
    expect(spacesToUnderscores("hello")).toBe("hello");
  });

  test("handles multiple consecutive spaces", () => {
    expect(spacesToUnderscores("a  b")).toBe("a__b");
  });

  test("handles empty string", () => {
    expect(spacesToUnderscores("")).toBe("");
  });
});
