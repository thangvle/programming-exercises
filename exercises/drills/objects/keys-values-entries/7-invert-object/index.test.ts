import { test, expect, describe } from "bun:test";
import { invertObject } from ".";

describe("invertObject", () => {
  test("swaps keys and values", () => {
    expect(invertObject({ a: "x", b: "y" })).toEqual({ x: "a", y: "b" });
  });

  test("returns empty object for empty input", () => {
    expect(invertObject({})).toEqual({});
  });

  test("inverts single-property object", () => {
    expect(invertObject({ name: "key" })).toEqual({ key: "name" });
  });

  test("inverts three-property object", () => {
    expect(invertObject({ r: "red", g: "green", b: "blue" })).toEqual({
      red: "r",
      green: "g",
      blue: "b",
    });
  });

  test("inverts numeric string values", () => {
    expect(invertObject({ a: "1", b: "2" })).toEqual({ "1": "a", "2": "b" });
  });
});
