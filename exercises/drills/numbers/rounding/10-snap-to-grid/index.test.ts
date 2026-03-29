import { test, expect, describe } from "bun:test";
import { snapToGrid } from ".";

describe("snapToGrid", () => {
  test("snaps 7 to nearest 5 → 5", () => {
    expect(snapToGrid(7, 5)).toBe(5);
  });

  test("snaps 8 to nearest 5 → 10", () => {
    expect(snapToGrid(8, 5)).toBe(10);
  });

  test("snaps exact grid point to itself", () => {
    expect(snapToGrid(10, 5)).toBe(10);
  });

  test("snaps 14 to nearest 10 → 10", () => {
    expect(snapToGrid(14, 10)).toBe(10);
  });

  test("snaps 0 to 0", () => {
    expect(snapToGrid(0, 5)).toBe(0);
  });
});
