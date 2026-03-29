import { test, expect, describe } from "bun:test";
import { renameKeys } from ".";

describe("renameKeys", () => {
  test("renames keys using mapping", () => {
    expect(renameKeys({ name: "A", age: 20 }, { name: "fullName", age: "years" })).toEqual({
      fullName: "A",
      years: 20,
    });
  });

  test("keeps keys that are not in mapping", () => {
    expect(renameKeys({ a: 1, b: 2 }, { a: "x" })).toEqual({ x: 1, b: 2 });
  });

  test("returns same keys when mapping is empty", () => {
    expect(renameKeys({ a: 1 }, {})).toEqual({ a: 1 });
  });

  test("renames single key", () => {
    expect(renameKeys({ old: "value" }, { old: "new" })).toEqual({ new: "value" });
  });

  test("handles empty object", () => {
    expect(renameKeys({}, { a: "b" })).toEqual({});
  });
});
