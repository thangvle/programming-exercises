import { test, expect, describe } from "bun:test";
import { removeLeadingZeros } from ".";

describe("removeLeadingZeros", () => {
  test("removes leading zeros", () => {
    expect(removeLeadingZeros("007")).toBe("7");
  });

  test("keeps non-leading zeros", () => {
    expect(removeLeadingZeros("100")).toBe("100");
  });

  test("removes multiple leading zeros", () => {
    expect(removeLeadingZeros("000123")).toBe("123");
  });

  test("handles single zero", () => {
    expect(removeLeadingZeros("0")).toBe("0");
  });

  test("handles string with no leading zeros", () => {
    expect(removeLeadingZeros("42")).toBe("42");
  });
});
