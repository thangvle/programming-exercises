import { test, expect, describe } from "bun:test";
import { roundTo } from ".";

describe("roundTo", () => {
  test("rounds to 2 decimal places", () => {
    expect(roundTo(3.14159, 2)).toBe(3.14);
  });

  test("rounds to 4 decimal places", () => {
    expect(roundTo(3.14159, 4)).toBe(3.1416);
  });

  test("rounds to 0 decimal places", () => {
    expect(roundTo(3.7, 0)).toBe(4);
  });

  test("rounds to 1 decimal place", () => {
    expect(roundTo(2.55, 1)).toBe(2.6);
  });

  test("rounds negative number to 2 decimals", () => {
    expect(roundTo(-1.567, 2)).toBe(-1.57);
  });
});
