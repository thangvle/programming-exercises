import { test, expect, describe } from "bun:test";
import { stringToFloat } from ".";

describe("stringToFloat", () => {
  test("parses 3.14", () => {
    expect(stringToFloat("3.14")).toBe(3.14);
  });

  test("parses 0.5", () => {
    expect(stringToFloat("0.5")).toBe(0.5);
  });

  test("parses integer string as float", () => {
    expect(stringToFloat("10")).toBe(10);
  });

  test("parses negative float", () => {
    expect(stringToFloat("-2.5")).toBe(-2.5);
  });

  test("parses zero", () => {
    expect(stringToFloat("0.0")).toBe(0);
  });
});
