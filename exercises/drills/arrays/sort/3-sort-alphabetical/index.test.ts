import { test, expect, describe } from "bun:test";
import { sortAlphabetical } from "./index";

describe("sortAlphabetical", () => {
  test("sorts fruit names", () => {
    expect(sortAlphabetical(["banana", "apple", "cherry"])).toEqual(["apple", "banana", "cherry"]);
  });

  test("sorts single characters", () => {
    expect(sortAlphabetical(["z", "a", "m"])).toEqual(["a", "m", "z"]);
  });

  test("handles a single string", () => {
    expect(sortAlphabetical(["one"])).toEqual(["one"]);
  });

  test("sorts animal names", () => {
    expect(sortAlphabetical(["dog", "cat", "bird"])).toEqual(["bird", "cat", "dog"]);
  });

  test("handles an empty array", () => {
    expect(sortAlphabetical([])).toEqual([]);
  });
});
