import { test, expect, describe } from "bun:test";
import { roundToNearest } from ".";

describe("roundToNearest", () => {
  test("rounds 17 to nearest 5 → 15", () => {
    expect(roundToNearest(17, 5)).toBe(15);
  });

  test("rounds 18 to nearest 5 → 20", () => {
    expect(roundToNearest(18, 5)).toBe(20);
  });

  test("rounds 14 to nearest 10 → 10", () => {
    expect(roundToNearest(14, 10)).toBe(10);
  });

  test("rounds exact multiple to itself", () => {
    expect(roundToNearest(20, 5)).toBe(20);
  });

  test("rounds to nearest 3", () => {
    expect(roundToNearest(7, 3)).toBe(6);
  });
});
