import { test, expect, describe } from "bun:test";
import { parseRgb } from ".";

describe("parseRgb", () => {
  test("parses rgb with mixed values", () => {
    expect(parseRgb("rgb(255,128,0)")).toEqual({ r: 255, g: 128, b: 0 });
  });

  test("parses all zeros", () => {
    expect(parseRgb("rgb(0,0,0)")).toEqual({ r: 0, g: 0, b: 0 });
  });

  test("parses all max values", () => {
    expect(parseRgb("rgb(255,255,255)")).toEqual({ r: 255, g: 255, b: 255 });
  });

  test("parses mid-range values", () => {
    expect(parseRgb("rgb(100,150,200)")).toEqual({ r: 100, g: 150, b: 200 });
  });

  test("parses single digit values", () => {
    expect(parseRgb("rgb(1,2,3)")).toEqual({ r: 1, g: 2, b: 3 });
  });
});
