import { test, expect, describe } from "bun:test";
import { fixDoubleSpaces } from ".";

describe("fixDoubleSpaces", () => {
  test("fixes one double space", () => {
    expect(fixDoubleSpaces("hello  world")).toBe("hello world");
  });

  test("fixes multiple double spaces", () => {
    expect(fixDoubleSpaces("a  b  c")).toBe("a b c");
  });

  test("leaves single spaces unchanged", () => {
    expect(fixDoubleSpaces("hello world")).toBe("hello world");
  });

  test("handles no spaces", () => {
    expect(fixDoubleSpaces("hello")).toBe("hello");
  });

  test("handles triple spaces (replaces pairs)", () => {
    expect(fixDoubleSpaces("a   b")).toBe("a  b");
  });
});
