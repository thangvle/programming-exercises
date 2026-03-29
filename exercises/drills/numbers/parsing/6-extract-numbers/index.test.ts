import { test, expect, describe } from "bun:test";
import { extractNumbers } from ".";

describe("extractNumbers", () => {
  test("extracts numbers from sentence", () => {
    expect(extractNumbers("I have 3 cats and 2 dogs")).toEqual([3, 2]);
  });

  test("returns empty array when no numbers", () => {
    expect(extractNumbers("no numbers here")).toEqual([]);
  });

  test("extracts single number", () => {
    expect(extractNumbers("room 42")).toEqual([42]);
  });

  test("extracts multiple numbers", () => {
    expect(extractNumbers("1 plus 2 equals 3")).toEqual([1, 2, 3]);
  });

  test("extracts large numbers", () => {
    expect(extractNumbers("population is 1000000")).toEqual([1000000]);
  });
});
