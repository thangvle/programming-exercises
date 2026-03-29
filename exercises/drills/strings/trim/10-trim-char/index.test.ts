import { test, expect, describe } from "bun:test";
import { trimChar } from ".";

describe("trimChar", () => {
  test("trims dashes from both ends", () => {
    expect(trimChar("---hello---", "-")).toBe("hello");
  });

  test("trims asterisks from both ends", () => {
    expect(trimChar("***star***", "*")).toBe("star");
  });

  test("returns same string when char not at edges", () => {
    expect(trimChar("hello", "-")).toBe("hello");
  });

  test("trims only from edges, not middle", () => {
    expect(trimChar("--hello--world--", "-")).toBe("hello--world");
  });

  test("handles string made entirely of the character", () => {
    expect(trimChar("---", "-")).toBe("");
  });
});
