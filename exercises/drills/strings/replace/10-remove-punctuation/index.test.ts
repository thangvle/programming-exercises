import { test, expect, describe } from "bun:test";
import { removePunctuation } from ".";

describe("removePunctuation", () => {
  test("removes comma and exclamation mark", () => {
    expect(removePunctuation("Hello, world!")).toBe("Hello world");
  });

  test("removes dots and question mark", () => {
    expect(removePunctuation("Wait... what?")).toBe("Wait what");
  });

  test("returns same string when no punctuation", () => {
    expect(removePunctuation("hello world")).toBe("hello world");
  });

  test("removes all punctuation types", () => {
    expect(removePunctuation("Hi! How are you? Fine.")).toBe("Hi How are you Fine");
  });

  test("handles string of only punctuation", () => {
    expect(removePunctuation(".,!?")).toBe("");
  });
});
