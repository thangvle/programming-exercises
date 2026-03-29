import { test, expect, describe } from "bun:test";
import { extractNames } from ".";

describe("extractNames", () => {
  test("extracts names from objects", () => {
    expect(extractNames([{ name: "Alice" }, { name: "Bob" }])).toEqual([
      "Alice",
      "Bob",
    ]);
  });

  test("handles single object", () => {
    expect(extractNames([{ name: "Charlie" }])).toEqual(["Charlie"]);
  });

  test("handles empty array", () => {
    expect(extractNames([])).toEqual([]);
  });

  test("handles objects with empty name", () => {
    expect(extractNames([{ name: "" }, { name: "Test" }])).toEqual([
      "",
      "Test",
    ]);
  });

  test("handles many objects", () => {
    expect(
      extractNames([{ name: "A" }, { name: "B" }, { name: "C" }, { name: "D" }])
    ).toEqual(["A", "B", "C", "D"]);
  });
});
