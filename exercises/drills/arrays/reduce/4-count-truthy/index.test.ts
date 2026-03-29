import { test, expect, describe } from "bun:test";
import { countTruthy } from ".";

describe("countTruthy", () => {
  test("counts truthy in mixed array", () => {
    expect(countTruthy([0, "", 1, "hi", null])).toEqual(2);
  });

  test("counts all truthy", () => {
    expect(countTruthy([1, 2, 3])).toEqual(3);
  });

  test("returns 0 when all falsy", () => {
    expect(countTruthy([0, false, null, undefined, ""])).toEqual(0);
  });

  test("returns 0 for empty array", () => {
    expect(countTruthy([])).toEqual(0);
  });

  test("counts boolean true", () => {
    expect(countTruthy([true, false, true])).toEqual(2);
  });
});
