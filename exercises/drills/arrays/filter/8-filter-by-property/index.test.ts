import { test, expect, describe } from "bun:test";
import { filterActive } from ".";

describe("filterActive", () => {
  test("keeps only active items", () => {
    expect(
      filterActive([
        { name: "A", active: true },
        { name: "B", active: false },
      ])
    ).toEqual([{ name: "A", active: true }]);
  });

  test("returns all when all active", () => {
    expect(
      filterActive([
        { name: "A", active: true },
        { name: "B", active: true },
      ])
    ).toEqual([
      { name: "A", active: true },
      { name: "B", active: true },
    ]);
  });

  test("returns empty when none active", () => {
    expect(
      filterActive([
        { name: "A", active: false },
        { name: "B", active: false },
      ])
    ).toEqual([]);
  });

  test("handles empty array", () => {
    expect(filterActive([])).toEqual([]);
  });

  test("handles single active item", () => {
    expect(filterActive([{ name: "X", active: true }])).toEqual([
      { name: "X", active: true },
    ]);
  });
});
