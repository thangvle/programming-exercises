import { test, expect, describe } from "bun:test";
import { formatId } from ".";

describe("formatId", () => {
  test("pads small number to 6 digits", () => {
    expect(formatId(42)).toBe("000042");
  });

  test("keeps 6 digit number as-is", () => {
    expect(formatId(123456)).toBe("123456");
  });

  test("pads single digit", () => {
    expect(formatId(1)).toBe("000001");
  });

  test("pads zero", () => {
    expect(formatId(0)).toBe("000000");
  });

  test("keeps number longer than 6 digits", () => {
    expect(formatId(1234567)).toBe("1234567");
  });
});
