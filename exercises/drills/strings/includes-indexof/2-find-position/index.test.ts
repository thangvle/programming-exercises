import { test, expect, describe } from "bun:test";
import { findPosition } from ".";

describe("findPosition", () => {
  test("finds substring in the middle", () => {
    expect(findPosition("hello world", "world")).toBe(6);
  });

  test("returns -1 when substring is not found", () => {
    expect(findPosition("hello world", "xyz")).toBe(-1);
  });

  test("finds substring at the start", () => {
    expect(findPosition("hello world", "hello")).toBe(0);
  });

  test("finds single character", () => {
    expect(findPosition("abcdef", "d")).toBe(3);
  });

  test("returns 0 for empty substring", () => {
    expect(findPosition("hello", "")).toBe(0);
  });
});
