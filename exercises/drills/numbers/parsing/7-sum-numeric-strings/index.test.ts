import { test, expect, describe } from "bun:test";
import { sumStrings } from ".";

describe("sumStrings", () => {
  test("sums three numeric strings", () => {
    expect(sumStrings(["1", "2", "3"])).toBe(6);
  });

  test("sums two numeric strings", () => {
    expect(sumStrings(["10", "20"])).toBe(30);
  });

  test("returns 0 for empty array", () => {
    expect(sumStrings([])).toBe(0);
  });

  test("sums single element", () => {
    expect(sumStrings(["42"])).toBe(42);
  });

  test("sums decimal strings", () => {
    expect(sumStrings(["1.5", "2.5"])).toBe(4);
  });
});
