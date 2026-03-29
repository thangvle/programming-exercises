import { test, expect, describe } from "bun:test";
import { tableRow } from ".";

describe("tableRow", () => {
  test("formats short name and two digit score", () => {
    expect(tableRow("Alice", 95)).toBe("Alice          95   ");
  });

  test("formats short name and three digit score", () => {
    expect(tableRow("Bob", 100)).toBe("Bob            100  ");
  });

  test("formats longer name", () => {
    expect(tableRow("Christopher", 88)).toBe("Christopher    88   ");
  });

  test("formats name at max length", () => {
    expect(tableRow("AbcdefghijklmnO", 1)).toBe("AbcdefghijklmnO1    ");
  });

  test("formats single digit score", () => {
    expect(tableRow("Eve", 5)).toBe("Eve            5    ");
  });
});
