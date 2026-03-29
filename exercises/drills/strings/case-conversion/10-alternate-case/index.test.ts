import { test, expect, describe } from "bun:test";
import { alternateCase } from ".";

describe("alternateCase", () => {
  test("alternates case starting lowercase", () => {
    expect(alternateCase("hello")).toBe("hElLo");
  });

  test("alternates case for another word", () => {
    expect(alternateCase("world")).toBe("wOrLd");
  });

  test("handles single character", () => {
    expect(alternateCase("a")).toBe("a");
  });

  test("handles two characters", () => {
    expect(alternateCase("ab")).toBe("aB");
  });

  test("handles empty string", () => {
    expect(alternateCase("")).toBe("");
  });
});
