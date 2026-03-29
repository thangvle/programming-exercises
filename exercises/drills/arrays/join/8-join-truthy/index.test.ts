import { test, expect, describe } from "bun:test";
import { joinTruthy } from "./index";

describe("joinTruthy", () => {
  test("filters empty string and null", () => {
    expect(joinTruthy(["hi", "", null, "bye"], " ")).toBe("hi bye");
  });

  test("filters zero and null from numbers", () => {
    expect(joinTruthy([0, 1, 2, null, 3], ",")).toBe("1,2,3");
  });

  test("filters false and undefined", () => {
    expect(joinTruthy(["a", false, "b", undefined], "-")).toBe("a-b");
  });

  test("joins all truthy values", () => {
    expect(joinTruthy(["hello", "world"], " ")).toBe("hello world");
  });

  test("returns empty string when all falsy", () => {
    expect(joinTruthy([null, undefined, 0, "", false], " ")).toBe("");
  });
});
