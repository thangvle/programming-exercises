import { test, expect, describe } from "bun:test";
import { padNumber } from ".";

describe("padNumber", () => {
  test("pads single digit to 3", () => {
    expect(padNumber(5)).toBe("005");
  });

  test("pads two digits to 3", () => {
    expect(padNumber(42)).toBe("042");
  });

  test("keeps three digit number", () => {
    expect(padNumber(123)).toBe("123");
  });

  test("pads zero", () => {
    expect(padNumber(0)).toBe("000");
  });

  test("keeps number longer than 3 digits", () => {
    expect(padNumber(1234)).toBe("1234");
  });
});
