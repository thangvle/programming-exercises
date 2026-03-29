import { test, expect, describe } from "bun:test";
import { sortByAge } from "./index";

describe("sortByAge", () => {
  test("sorts two people by age", () => {
    expect(sortByAge([{ name: "B", age: 30 }, { name: "A", age: 20 }])).toEqual([
      { name: "A", age: 20 },
      { name: "B", age: 30 },
    ]);
  });

  test("handles a single person", () => {
    expect(sortByAge([{ name: "X", age: 5 }])).toEqual([{ name: "X", age: 5 }]);
  });

  test("preserves order for same age", () => {
    expect(sortByAge([{ name: "C", age: 10 }, { name: "D", age: 10 }])).toEqual([
      { name: "C", age: 10 },
      { name: "D", age: 10 },
    ]);
  });

  test("sorts three people", () => {
    expect(
      sortByAge([{ name: "Z", age: 50 }, { name: "Y", age: 25 }, { name: "X", age: 35 }])
    ).toEqual([
      { name: "Y", age: 25 },
      { name: "X", age: 35 },
      { name: "Z", age: 50 },
    ]);
  });

  test("handles an empty array", () => {
    expect(sortByAge([])).toEqual([]);
  });
});
