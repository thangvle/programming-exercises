import { test, expect, describe } from "bun:test";
import { echoWord } from ".";

describe("echoWord", () => {
  test("repeats word 3 times", () => {
    expect(echoWord("hey", 3)).toBe("hey hey hey");
  });

  test("repeats word 2 times", () => {
    expect(echoWord("ok", 2)).toBe("ok ok");
  });

  test("repeats word once", () => {
    expect(echoWord("hello", 1)).toBe("hello");
  });

  test("repeats word 5 times", () => {
    expect(echoWord("go", 5)).toBe("go go go go go");
  });

  test("returns empty string for 0 repeats", () => {
    expect(echoWord("hey", 0)).toBe("");
  });
});
