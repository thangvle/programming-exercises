import { test, expect, describe } from "bun:test";
import { progressBar } from ".";

describe("progressBar", () => {
  test("shows 30% progress", () => {
    expect(progressBar(3, 10)).toBe("[###-------]");
  });

  test("shows 100% progress", () => {
    expect(progressBar(10, 10)).toBe("[##########]");
  });

  test("shows 0% progress", () => {
    expect(progressBar(0, 10)).toBe("[----------]");
  });

  test("shows 50% progress", () => {
    expect(progressBar(5, 10)).toBe("[#####-----]");
  });

  test("shows progress with different total", () => {
    expect(progressBar(1, 4)).toBe("[##--------]");
  });
});
