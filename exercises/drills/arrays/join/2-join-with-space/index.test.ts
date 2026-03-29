import { test, expect, describe } from "bun:test";
import { joinWithSpace } from "./index";

describe("joinWithSpace", () => {
  test("joins two words", () => {
    expect(joinWithSpace(["hello", "world"])).toBe("hello world");
  });

  test("joins three words", () => {
    expect(joinWithSpace(["one", "two", "three"])).toBe("one two three");
  });

  test("returns single word as-is", () => {
    expect(joinWithSpace(["hi"])).toBe("hi");
  });

  test("joins two letters", () => {
    expect(joinWithSpace(["a", "b"])).toBe("a b");
  });

  test("returns empty string for empty array", () => {
    expect(joinWithSpace([])).toBe("");
  });
});
