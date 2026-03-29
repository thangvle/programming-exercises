import { test, expect, describe } from "bun:test";
import { countOccurrences } from ".";

describe("countOccurrences", () => {
  test("counts multiple occurrences", () => {
    expect(countOccurrences("hello", "l")).toBe(2);
  });

  test("counts character in repeated pattern", () => {
    expect(countOccurrences("banana", "a")).toBe(3);
  });

  test("returns 0 when character is absent", () => {
    expect(countOccurrences("hello", "z")).toBe(0);
  });

  test("counts single occurrence", () => {
    expect(countOccurrences("hello", "h")).toBe(1);
  });

  test("returns 0 for empty string", () => {
    expect(countOccurrences("", "a")).toBe(0);
  });
});
