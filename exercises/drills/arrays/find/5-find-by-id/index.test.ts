import { test, expect, describe } from "bun:test";
import { findById } from ".";

describe("findById", () => {
  test("finds object by id", () => {
    expect(
      findById(
        [
          { id: 1, name: "A" },
          { id: 2, name: "B" },
        ],
        2
      )
    ).toEqual({ id: 2, name: "B" });
  });

  test("returns undefined when id not found", () => {
    expect(findById([{ id: 1, name: "A" }], 5)).toBeUndefined();
  });

  test("finds first matching id", () => {
    expect(
      findById(
        [
          { id: 1, name: "First" },
          { id: 1, name: "Second" },
        ],
        1
      )
    ).toEqual({ id: 1, name: "First" });
  });

  test("handles empty array", () => {
    expect(findById([], 1)).toBeUndefined();
  });

  test("finds object with id at end", () => {
    expect(
      findById(
        [
          { id: 1, name: "A" },
          { id: 2, name: "B" },
          { id: 3, name: "C" },
        ],
        3
      )
    ).toEqual({ id: 3, name: "C" });
  });
});
