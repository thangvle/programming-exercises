import { test, expect, describe } from "bun:test";
import { csvToArray } from "./index";

describe("csvToArray", () => {
  test("splits simple csv", () => {
    expect(csvToArray("a,b,c")).toEqual(["a", "b", "c"]);
  });

  test("trims spaces after commas", () => {
    expect(csvToArray("a, b, c")).toEqual(["a", "b", "c"]);
  });

  test("single value", () => {
    expect(csvToArray("hello")).toEqual(["hello"]);
  });

  test("splits with extra spaces", () => {
    expect(csvToArray("red , green , blue")).toEqual(["red", "green", "blue"]);
  });

  test("splits two values", () => {
    expect(csvToArray("yes,no")).toEqual(["yes", "no"]);
  });
});
