import { test, expect, describe } from "bun:test";
import { percentage } from ".";

describe("percentage", () => {
  test("calculates 1/3 as 33.3", () => {
    expect(percentage(1, 3)).toBe(33.3);
  });

  test("calculates 1/2 as 50", () => {
    expect(percentage(1, 2)).toBe(50);
  });

  test("calculates 3/4 as 75", () => {
    expect(percentage(3, 4)).toBe(75);
  });

  test("calculates 1/1 as 100", () => {
    expect(percentage(1, 1)).toBe(100);
  });

  test("calculates 1/7 as 14.3", () => {
    expect(percentage(1, 7)).toBe(14.3);
  });
});
