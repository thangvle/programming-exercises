import { test, expect, describe } from "bun:test";
import { censorWord } from ".";

describe("censorWord", () => {
  test("censors word in the middle", () => {
    expect(censorWord("oh dang it", "dang")).toBe("oh **** it");
  });

  test("censors word at the end", () => {
    expect(censorWord("hello world", "world")).toBe("hello ****");
  });

  test("censors word at the start", () => {
    expect(censorWord("bad day", "bad")).toBe("**** day");
  });

  test("returns original string when word not found", () => {
    expect(censorWord("hello world", "xyz")).toBe("hello world");
  });

  test("censors only the first occurrence", () => {
    expect(censorWord("no no no", "no")).toBe("**** no no");
  });
});
