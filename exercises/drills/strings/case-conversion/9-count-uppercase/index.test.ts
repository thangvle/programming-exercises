import { test, expect, describe } from "bun:test";
import { countUppercase } from ".";

describe("countUppercase", () => {
  test("counts uppercase in mixed case string", () => {
    expect(countUppercase("Hello World")).toBe(2);
  });

  test("returns 0 for all lowercase", () => {
    expect(countUppercase("hello")).toBe(0);
  });

  test("counts all letters in uppercase string", () => {
    expect(countUppercase("HELLO")).toBe(5);
  });

  test("ignores numbers and symbols", () => {
    expect(countUppercase("H3LL0!")).toBe(3);
  });

  test("returns 0 for empty string", () => {
    expect(countUppercase("")).toBe(0);
  });
});
