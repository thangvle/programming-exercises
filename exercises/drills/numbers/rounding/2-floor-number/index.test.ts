import { test, expect, describe } from "bun:test";
import { floorNumber } from ".";

describe("floorNumber", () => {
  test("floors 4.9 to 4", () => {
    expect(floorNumber(4.9)).toBe(4);
  });

  test("floors 4.1 to 4", () => {
    expect(floorNumber(4.1)).toBe(4);
  });

  test("floors negative number further down", () => {
    expect(floorNumber(-2.3)).toBe(-3);
  });

  test("returns integer unchanged", () => {
    expect(floorNumber(5)).toBe(5);
  });

  test("floors 0.99 to 0", () => {
    expect(floorNumber(0.99)).toBe(0);
  });
});
