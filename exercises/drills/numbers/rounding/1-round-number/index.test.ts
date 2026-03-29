import { test, expect, describe } from "bun:test";
import { roundNumber } from ".";

describe("roundNumber", () => {
  test("rounds up when decimal >= 0.5", () => {
    expect(roundNumber(4.6)).toBe(5);
  });

  test("rounds down when decimal < 0.5", () => {
    expect(roundNumber(4.4)).toBe(4);
  });

  test("rounds 0.5 up", () => {
    expect(roundNumber(2.5)).toBe(3);
  });

  test("rounds negative number", () => {
    expect(roundNumber(-3.7)).toBe(-4);
  });

  test("returns integer unchanged", () => {
    expect(roundNumber(7)).toBe(7);
  });
});
