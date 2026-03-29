import { test, expect, describe } from "bun:test";
import { ceilNumber } from ".";

describe("ceilNumber", () => {
  test("ceils 4.1 to 5", () => {
    expect(ceilNumber(4.1)).toBe(5);
  });

  test("returns integer unchanged", () => {
    expect(ceilNumber(4.0)).toBe(4);
  });

  test("ceils 0.01 to 1", () => {
    expect(ceilNumber(0.01)).toBe(1);
  });

  test("ceils negative number towards zero", () => {
    expect(ceilNumber(-2.9)).toBe(-2);
  });

  test("ceils 4.9 to 5", () => {
    expect(ceilNumber(4.9)).toBe(5);
  });
});
