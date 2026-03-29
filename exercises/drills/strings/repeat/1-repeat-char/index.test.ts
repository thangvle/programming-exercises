import { test, expect, describe } from "bun:test";
import { repeatChar } from ".";

describe("repeatChar", () => {
  test("repeats asterisk 5 times", () => {
    expect(repeatChar("*", 5)).toBe("*****");
  });

  test("repeats dash 3 times", () => {
    expect(repeatChar("-", 3)).toBe("---");
  });

  test("repeats once", () => {
    expect(repeatChar("x", 1)).toBe("x");
  });

  test("repeats zero times returns empty", () => {
    expect(repeatChar("x", 0)).toBe("");
  });

  test("repeats hash 10 times", () => {
    expect(repeatChar("#", 10)).toBe("##########");
  });
});
