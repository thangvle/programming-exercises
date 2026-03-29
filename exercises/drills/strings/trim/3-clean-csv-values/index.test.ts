import { test, expect, describe } from "bun:test";
import { cleanCsvValues } from ".";

describe("cleanCsvValues", () => {
  test("trims spaces around comma-separated values", () => {
    expect(cleanCsvValues(" a , b , c ")).toEqual(["a", "b", "c"]);
  });

  test("handles values without extra spaces", () => {
    expect(cleanCsvValues("x,y,z")).toEqual(["x", "y", "z"]);
  });

  test("handles single value", () => {
    expect(cleanCsvValues(" hello ")).toEqual(["hello"]);
  });

  test("handles mixed spacing", () => {
    expect(cleanCsvValues("a, b ,c")).toEqual(["a", "b", "c"]);
  });

  test("handles values with inner spaces", () => {
    expect(cleanCsvValues(" hello world , foo bar ")).toEqual(["hello world", "foo bar"]);
  });
});
