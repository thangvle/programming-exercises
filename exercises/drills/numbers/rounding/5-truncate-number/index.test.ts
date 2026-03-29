import { test, expect, describe } from "bun:test";
import { truncateNumber } from ".";

describe("truncateNumber", () => {
  test("truncates negative number towards zero", () => {
    expect(truncateNumber(-4.7)).toBe(-4);
  });

  test("truncates positive number", () => {
    expect(truncateNumber(4.9)).toBe(4);
  });

  test("returns integer unchanged", () => {
    expect(truncateNumber(5)).toBe(5);
  });

  test("truncates small positive decimal", () => {
    expect(truncateNumber(0.99)).toBe(0);
  });

  test("truncates small negative decimal", () => {
    expect(truncateNumber(-0.99)).toBe(0);
  });
});
