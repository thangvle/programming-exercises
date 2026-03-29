import { test, expect, describe } from "bun:test";
import { duplicateEach } from "./index";

describe("duplicateEach", () => {
  test("triplicates each number", () => {
    expect(duplicateEach([1, 2, 3], 3)).toEqual([1, 1, 1, 2, 2, 2, 3, 3, 3]);
  });

  test("duplicates each string", () => {
    expect(duplicateEach(["a", "b"], 2)).toEqual(["a", "a", "b", "b"]);
  });

  test("quadruples a single element", () => {
    expect(duplicateEach([5], 4)).toEqual([5, 5, 5, 5]);
  });

  test("keeps elements once when n is 1", () => {
    expect(duplicateEach([1, 2], 1)).toEqual([1, 2]);
  });

  test("handles an empty array", () => {
    expect(duplicateEach([], 3)).toEqual([]);
  });
});
