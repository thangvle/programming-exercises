import { test, expect, describe } from "bun:test";
import { tabsToSpaces } from ".";

describe("tabsToSpaces", () => {
  test("replaces tab between words", () => {
    expect(tabsToSpaces("a\tb")).toBe("a  b");
  });

  test("replaces leading tab", () => {
    expect(tabsToSpaces("\thello")).toBe("  hello");
  });

  test("replaces multiple tabs", () => {
    expect(tabsToSpaces("a\tb\tc")).toBe("a  b  c");
  });

  test("returns same string when no tabs", () => {
    expect(tabsToSpaces("hello world")).toBe("hello world");
  });

  test("handles consecutive tabs", () => {
    expect(tabsToSpaces("a\t\tb")).toBe("a    b");
  });
});
