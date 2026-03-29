import { test, expect, describe } from "bun:test";
import { shout } from ".";

describe("shout", () => {
  test("converts lowercase to uppercase", () => {
    expect(shout("hello")).toBe("HELLO");
  });

  test("keeps already uppercase string", () => {
    expect(shout("HELLO")).toBe("HELLO");
  });

  test("converts mixed case to uppercase", () => {
    expect(shout("Hello World")).toBe("HELLO WORLD");
  });

  test("handles empty string", () => {
    expect(shout("")).toBe("");
  });

  test("handles string with numbers and symbols", () => {
    expect(shout("hello123!")).toBe("HELLO123!");
  });
});
