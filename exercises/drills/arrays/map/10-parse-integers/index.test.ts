import { test, expect, describe } from "bun:test";
import { parseIntegers } from ".";

describe("parseIntegers", () => {
  test("parses simple integers", () => {
    expect(parseIntegers(["1", "2", "3"])).toEqual([1, 2, 3]);
  });

  test("parses larger numbers", () => {
    expect(parseIntegers(["10", "200", "3000"])).toEqual([10, 200, 3000]);
  });

  test("parses negative number strings", () => {
    expect(parseIntegers(["-1", "-2", "3"])).toEqual([-1, -2, 3]);
  });

  test("returns empty array for empty input", () => {
    expect(parseIntegers([])).toEqual([]);
  });

  test("parses zero", () => {
    expect(parseIntegers(["0", "0", "0"])).toEqual([0, 0, 0]);
  });
});
