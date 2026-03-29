import { test, expect, describe } from "bun:test";
import { flatMapDouble } from "./index";

describe("flatMapDouble", () => {
  test("doubles each number", () => {
    expect(flatMapDouble([1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3]);
  });

  test("doubles a single element", () => {
    expect(flatMapDouble([5])).toEqual([5, 5]);
  });

  test("doubles strings", () => {
    expect(flatMapDouble(["a", "b"])).toEqual(["a", "a", "b", "b"]);
  });

  test("doubles zero", () => {
    expect(flatMapDouble([0])).toEqual([0, 0]);
  });

  test("handles an empty array", () => {
    expect(flatMapDouble([])).toEqual([]);
  });
});
