import { test, expect, describe } from "bun:test";
import { joinWithComma } from "./index";

describe("joinWithComma", () => {
  test("joins three strings", () => {
    expect(joinWithComma(["a", "b", "c"])).toBe("a,b,c");
  });

  test("returns single string as-is", () => {
    expect(joinWithComma(["hello"])).toBe("hello");
  });

  test("joins two strings", () => {
    expect(joinWithComma(["x", "y"])).toBe("x,y");
  });

  test("joins number strings", () => {
    expect(joinWithComma(["1", "2", "3"])).toBe("1,2,3");
  });

  test("returns empty string for empty array", () => {
    expect(joinWithComma([])).toBe("");
  });
});
