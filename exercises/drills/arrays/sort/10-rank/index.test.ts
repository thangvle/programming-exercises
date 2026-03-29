import { test, expect, describe } from "bun:test";
import { rank } from "./index";

describe("rank", () => {
  test("ranks four distinct numbers", () => {
    expect(rank([40, 10, 30, 20])).toEqual([1, 4, 2, 3]);
  });

  test("ranks two numbers", () => {
    expect(rank([100, 200])).toEqual([2, 1]);
  });

  test("ranks a single number", () => {
    expect(rank([5])).toEqual([1]);
  });

  test("handles tied values", () => {
    expect(rank([3, 3, 1])).toEqual([1, 1, 3]);
  });

  test("ranks five numbers", () => {
    expect(rank([50, 40, 30, 20, 10])).toEqual([1, 2, 3, 4, 5]);
  });
});
