import { test, expect, describe } from "bun:test";
import { stringToInt } from ".";

describe("stringToInt", () => {
  test("parses positive integer", () => {
    expect(stringToInt("42")).toBe(42);
  });

  test("parses 100", () => {
    expect(stringToInt("100")).toBe(100);
  });

  test("parses zero", () => {
    expect(stringToInt("0")).toBe(0);
  });

  test("parses negative integer", () => {
    expect(stringToInt("-7")).toBe(-7);
  });

  test("parses large number", () => {
    expect(stringToInt("999999")).toBe(999999);
  });
});
