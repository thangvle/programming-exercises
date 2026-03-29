import { test, expect, describe } from "bun:test";
import { toCsvLine } from "./index";

describe("toCsvLine", () => {
  test("joins three column headers", () => {
    expect(toCsvLine(["name", "age", "city"])).toBe("name,age,city");
  });

  test("joins two values", () => {
    expect(toCsvLine(["a", "b"])).toBe("a,b");
  });

  test("returns single value", () => {
    expect(toCsvLine(["only"])).toBe("only");
  });

  test("joins four numeric strings", () => {
    expect(toCsvLine(["1", "2", "3", "4"])).toBe("1,2,3,4");
  });

  test("returns empty string for empty array", () => {
    expect(toCsvLine([])).toBe("");
  });
});
