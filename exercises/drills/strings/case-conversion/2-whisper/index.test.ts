import { test, expect, describe } from "bun:test";
import { whisper } from ".";

describe("whisper", () => {
  test("converts uppercase to lowercase", () => {
    expect(whisper("HELLO")).toBe("hello");
  });

  test("keeps already lowercase string", () => {
    expect(whisper("hello")).toBe("hello");
  });

  test("converts mixed case to lowercase", () => {
    expect(whisper("Hello World")).toBe("hello world");
  });

  test("handles empty string", () => {
    expect(whisper("")).toBe("");
  });

  test("handles string with numbers and symbols", () => {
    expect(whisper("HELLO123!")).toBe("hello123!");
  });
});
