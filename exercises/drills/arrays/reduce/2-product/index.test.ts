import { test, expect, describe } from "bun:test";
import { product } from ".";

describe("product", () => {
  test("multiplies positive numbers", () => {
    expect(product([1, 2, 3, 4])).toEqual(24);
  });

  test("multiplies two numbers", () => {
    expect(product([5, 5])).toEqual(25);
  });

  test("handles zero in array", () => {
    expect(product([1, 2, 0, 4])).toEqual(0);
  });

  test("handles single element", () => {
    expect(product([7])).toEqual(7);
  });

  test("handles negative numbers", () => {
    expect(product([-1, 2, -3])).toEqual(6);
  });
});
