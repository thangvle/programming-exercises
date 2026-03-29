import { test, expect, describe } from "bun:test";
import { parseCoordinate } from ".";

describe("parseCoordinate", () => {
  test("parses positive coordinates", () => {
    expect(parseCoordinate("10,20")).toEqual({ x: 10, y: 20 });
  });

  test("parses zero coordinates", () => {
    expect(parseCoordinate("0,0")).toEqual({ x: 0, y: 0 });
  });

  test("parses negative coordinates", () => {
    expect(parseCoordinate("-5,-10")).toEqual({ x: -5, y: -10 });
  });

  test("parses decimal coordinates", () => {
    expect(parseCoordinate("1.5,2.5")).toEqual({ x: 1.5, y: 2.5 });
  });

  test("parses large coordinates", () => {
    expect(parseCoordinate("100,200")).toEqual({ x: 100, y: 200 });
  });
});
