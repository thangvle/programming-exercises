import { test, expect, describe } from "bun:test";
import { truncate } from "./index";

describe("truncate", () => {
  test("truncates long string", () => {
    expect(truncate("hello world", 8)).toBe("hello...");
  });

  test("does not truncate short string", () => {
    expect(truncate("hi", 5)).toBe("hi");
  });

  test("does not truncate string at exact length", () => {
    expect(truncate("hello", 5)).toBe("hello");
  });

  test("truncates to 5 chars", () => {
    expect(truncate("abcdefgh", 5)).toBe("ab...");
  });

  test("truncates to 10 chars", () => {
    expect(truncate("this is a long sentence", 10)).toBe("this is...");
  });
});
