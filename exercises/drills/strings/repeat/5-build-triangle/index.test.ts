import { test, expect, describe } from "bun:test";
import { buildTriangle } from ".";

describe("buildTriangle", () => {
  test("builds triangle of height 3", () => {
    expect(buildTriangle(3)).toBe("*\n**\n***");
  });

  test("builds triangle of height 1", () => {
    expect(buildTriangle(1)).toBe("*");
  });

  test("builds triangle of height 4", () => {
    expect(buildTriangle(4)).toBe("*\n**\n***\n****");
  });

  test("builds triangle of height 2", () => {
    expect(buildTriangle(2)).toBe("*\n**");
  });

  test("builds triangle of height 5", () => {
    expect(buildTriangle(5)).toBe("*\n**\n***\n****\n*****");
  });
});
