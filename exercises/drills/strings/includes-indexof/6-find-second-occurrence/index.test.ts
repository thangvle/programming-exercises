import { test, expect, describe } from "bun:test";
import { findSecondOccurrence } from ".";

describe("findSecondOccurrence", () => {
  test("finds second occurrence of a character", () => {
    expect(findSecondOccurrence("hello", "l")).toBe(3);
  });

  test("returns -1 when character appears only once", () => {
    expect(findSecondOccurrence("hello", "h")).toBe(-1);
  });

  test("returns -1 when character is not found", () => {
    expect(findSecondOccurrence("hello", "z")).toBe(-1);
  });

  test("finds second occurrence in longer string", () => {
    expect(findSecondOccurrence("abracadabra", "a")).toBe(3);
  });

  test("finds second occurrence of adjacent characters", () => {
    expect(findSecondOccurrence("aardvark", "a")).toBe(1);
  });
});
