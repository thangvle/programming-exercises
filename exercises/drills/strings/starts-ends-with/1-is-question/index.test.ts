import { test, expect, describe } from "bun:test";
import { isQuestion } from ".";

describe("isQuestion", () => {
  test("returns true for a string ending with '?'", () => {
    expect(isQuestion("how are you?")).toBe(true);
  });

  test("returns false for a string without '?'", () => {
    expect(isQuestion("hello")).toBe(false);
  });

  test("returns false for a string with '?' in the middle", () => {
    expect(isQuestion("is this? no")).toBe(false);
  });

  test("returns true for just a question mark", () => {
    expect(isQuestion("?")).toBe(true);
  });

  test("returns false for an empty string", () => {
    expect(isQuestion("")).toBe(false);
  });
});
