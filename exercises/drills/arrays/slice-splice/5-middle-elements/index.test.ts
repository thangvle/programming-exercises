import { test, expect, describe } from "bun:test";
import { middleElements } from "./index";

describe("middleElements", () => {
  test("returns middle of five elements", () => {
    expect(middleElements([1, 2, 3, 4, 5])).toEqual([2, 3, 4]);
  });

  test("returns middle of three elements", () => {
    expect(middleElements([1, 2, 3])).toEqual([2]);
  });

  test("returns empty for two elements", () => {
    expect(middleElements([1, 2])).toEqual([]);
  });

  test("works with strings", () => {
    expect(middleElements(["a", "b", "c"])).toEqual(["b"]);
  });

  test("returns empty for single element", () => {
    expect(middleElements([1])).toEqual([]);
  });
});
