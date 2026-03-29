import { test, expect, describe } from "bun:test";
import { getMiddleChar } from "./index";

describe("getMiddleChar", () => {
  test("odd length string", () => {
    expect(getMiddleChar("hello")).toBe("l");
  });

  test("even length string", () => {
    expect(getMiddleChar("abcd")).toBe("bc");
  });

  test("single char string", () => {
    expect(getMiddleChar("a")).toBe("a");
  });

  test("two char string", () => {
    expect(getMiddleChar("ab")).toBe("ab");
  });

  test("three char string", () => {
    expect(getMiddleChar("cat")).toBe("a");
  });
});
