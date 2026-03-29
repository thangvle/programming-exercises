import { test, expect, describe } from "bun:test";
import { secondLargest } from ".";

describe("secondLargest", () => {
  test("finds second largest in mixed array", () => {
    expect(secondLargest([3, 1, 4, 1, 5])).toBe(4);
  });

  test("finds second largest in two-element array", () => {
    expect(secondLargest([10, 5])).toBe(5);
  });

  test("finds second largest with duplicates of max", () => {
    expect(secondLargest([5, 5, 3])).toBe(3);
  });

  test("finds second largest in descending array", () => {
    expect(secondLargest([100, 90, 80])).toBe(90);
  });

  test("finds second largest with negative numbers", () => {
    expect(secondLargest([-1, -5, -3])).toBe(-3);
  });
});
